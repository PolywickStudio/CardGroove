// Original Cardgroove catalog parsing and matching utilities.
export function normalizeHex(value) { return value.replace(/[\s:,-]/g, '').toUpperCase(); }
export function patternRegex(pattern) {
  const compact = pattern.replace(/[\s:,]/g, '').toUpperCase();
  // Only fixed hex, a nibble wildcard, a hex character class, or .* is allowed.
  // No arbitrary expressions, nested groups, or user-supplied regex execution.
  if (!/^(?:[0-9A-F]|\.(?:\*)?|\[[0-9A-F-]+\])+$/.test(compact)) throw new Error(`Unsupported ATR pattern: ${pattern}`);
  if ((compact.match(/\.\*/g) || []).length > 1) throw new Error('Only one variable-length wildcard is supported.');
  return new RegExp(`^${compact.replace(/\.\*/g, '[0-9A-F]*').replace(/\.(?!\*)/g, '[0-9A-F]')}$`);
}
export function matchesAtr(entry, input) {
  const hex = normalizeHex(input);
  if (!/^(?:[0-9A-F]{2}){2,33}$/.test(hex)) return false;
  if (entry.mask) {
    const base = normalizeHex(entry.atr), mask = normalizeHex(entry.mask);
    if (hex.length !== base.length || mask.length !== base.length) return false;
    for (let i = 0; i < hex.length; i += 2) {
      const m = parseInt(mask.slice(i,i+2),16);
      if ((parseInt(hex.slice(i,i+2),16) & m) !== (parseInt(base.slice(i,i+2),16) & m)) return false;
    }
    return true;
  }
  return patternRegex(entry.atr).test(hex);
}
export function parsePcsc(text) {
  const result = []; let current;
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    if (!line.trim() || line.startsWith('#')) continue;
    if (/^\s/.test(line)) { if (current) current.descriptions.push(line.trim()); }
    else { patternRegex(line.trim()); current = { atr: line.trim().toUpperCase(), mask: null, line: index+1, descriptions: [] }; result.push(current); }
  }
  if (result.some(record => !record.descriptions.length)) throw new Error('PC/SC record has no description.');
  return result;
}
export function parseOpenSc(text, fallback) {
  const constants = new Map([...text.matchAll(/(?:static\s+)?const\s+char\s+(\w+)\s*\[\s*\]\s*=\s*"([^"\n]*)"/g)].map(m => [m[1],m[2]]));
  const result = [];
  for (const table of text.matchAll(/(?:static\s+)?const\s+struct\s+sc_atr_table\s+\w+\s*\[\s*\]\s*=\s*\{([\s\S]*?)\n\};/g)) {
    for (const match of table[1].matchAll(/\{\s*"([0-9a-fA-F: ]+)"\s*,\s*(NULL|"[0-9a-fA-F: ]+")\s*,\s*(NULL|"[^"\n]*"|\w+)\s*,\s*(\w+)/g)) {
      const atr = normalizeHex(match[1]).match(/../g).join(' ');
      const mask = match[2] === 'NULL' ? null : normalizeHex(match[2].slice(1,-1)).match(/../g).join(' ');
      if (mask && normalizeHex(mask).length !== normalizeHex(atr).length) throw new Error('OpenSC ATR mask length mismatch.');
      const name = match[3].startsWith('"') ? match[3].slice(1,-1) : constants.get(match[3]) || fallback;
      const line = text.slice(0, table.index + table[0].indexOf(table[1]) + match.index).split('\n').length;
      result.push({atr,mask,line,descriptions:[name, `OpenSC driver type: ${match[4]}`]});
    }
  }
  if (!result.length) throw new Error(`No ATR records found in ${fallback}.`);
  return result;
}
export function filterCatalog(entries, {query = '', source = '', kind = '', mode = 'search'} = {}) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const hexQuery = normalizeHex(query);
  const isHex = /^[0-9A-F]+$/.test(hexQuery);
  return entries.filter(entry => {
    if (source && !entry.sources.some(s => s.id === source)) return false;
    if (kind && entry.kind !== kind) return false;
    if (!query.trim()) return true;
    if (mode === 'match') return matchesAtr(entry, query);
    if (isHex && normalizeHex(entry.atr).includes(hexQuery)) return true;
    const text = [entry.atr,...entry.descriptions].join(' ').toLowerCase();
    return words.every(word => text.includes(word));
  });
}
