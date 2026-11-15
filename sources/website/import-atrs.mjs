// SPDX-License-Identifier: GPL-2.0-or-later
// Imports a separately attributed reference dataset; never runs during site builds.
import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { parsePcsc, parseOpenSc, normalizeHex } from '../src/lib/atr-catalog.mjs';
const directory = new URL('../public/data/atr-sources/', import.meta.url);
const offline = process.argv.includes('--offline');
await fs.mkdir(directory, {recursive:true});
const oldManifest = await fs.readFile(new URL('manifest.json',directory),'utf8').then(JSON.parse).catch(()=>null);
async function download(url) {
  const response = await fetch(url, {signal:AbortSignal.timeout(60000)});
  if (!response.ok) throw new Error(`${response.status} while fetching ${url}`);
  return response.text();
}
const commit = offline ? oldManifest?.openScCommit : JSON.parse(await download('https://api.github.com/repos/OpenSC/OpenSC/commits/master')).sha;
if (!commit) throw new Error('Missing OpenSC source revision. Run an online import first.');
const inputs = [
  {id:'pcsc',file:'smartcard_list.txt',label:'PC/SC Tools community list',url:'https://pcsc-tools.apdu.fr/smartcard_list.txt',license:'GPL-2.0-or-later'},
  ...[['card-cardos.c','CardOS'],['card-openpgp.c','OpenPGP'],['card-sc-hsm.c','SmartCard-HSM'],['card-epass2003.c','ePass2003']].map(([file,label])=>({id:'opensc',file,label,url:`https://raw.githubusercontent.com/OpenSC/OpenSC/${commit}/src/libopensc/${file}`,license:'LGPL-2.1-or-later'})),
];
const groups = new Map(), sources = [];
for (const source of inputs) {
  const path = new URL(source.file,directory);
  const text = offline ? await fs.readFile(path,'utf8') : await download(source.url);
  const records = source.id === 'pcsc' ? parsePcsc(text) : parseOpenSc(text,source.label);
  if (source.id === 'pcsc' && records.length < 1000) throw new Error('Unexpectedly small PC/SC source.');
  if (!offline) await fs.writeFile(path,text);
  sources.push({...source,records:records.length,sha256:createHash('sha256').update(text).digest('hex')});
  for (const record of records) {
    const key = record.atr.replace(/[\s:]/g,'') + '/' + (record.mask ? normalizeHex(record.mask) : '');
    let entry = groups.get(key);
    if (!entry) { entry={id:createHash('sha256').update(key).digest('hex').slice(0,16),atr:record.atr,mask:record.mask,kind:record.mask ? 'Masked' : /^[0-9A-F ]+$/.test(record.atr) ? 'Exact' : 'Pattern',descriptions:[],sources:[]}; groups.set(key,entry); }
    entry.descriptions = [...new Set([...entry.descriptions,...record.descriptions])];
    entry.sources.push({id:source.id,label:source.id==='pcsc' ? source.label : `OpenSC · ${source.label}`,line:record.line,descriptions:record.descriptions,license:source.license,url:source.id==='pcsc' ? 'https://github.com/LudovicRousseau/pcsc-tools' : `https://github.com/OpenSC/OpenSC/blob/${commit}/src/libopensc/${source.file}#L${record.line}`,snapshot:`/data/atr-sources/${source.file}`});
  }
}
if (!offline) {
  for (const [file,url] of [['GPL-2.0.txt','https://raw.githubusercontent.com/LudovicRousseau/pcsc-tools/master/LICENCE'],['LGPL-2.1.txt',`https://raw.githubusercontent.com/OpenSC/OpenSC/${commit}/COPYING`]]) {
    await fs.writeFile(new URL(file,directory), await download(url));
  }
}
const entries = [...groups.values()].sort((a,b)=>a.atr.localeCompare(b.atr));
const manifest = {retrievedAt:offline ? oldManifest.retrievedAt : new Date().toISOString(),openScCommit:commit,sourceCount:2,recordCount:entries.length,inputs:sources};
await fs.writeFile(new URL('manifest.json',directory),JSON.stringify(manifest,null,2)+'\n');
await fs.writeFile(new URL('../public/data/atrs.json',import.meta.url),JSON.stringify({manifest,entries})+'\n');
await fs.copyFile(new URL(import.meta.url),new URL('import-atrs.mjs',directory));
await fs.copyFile(new URL('../src/lib/atr-catalog.mjs',import.meta.url),new URL('atr-catalog.mjs',directory));
console.log(`${entries.length} unique ATR entries from ${sources.length} documents / 2 independent projects.`);
