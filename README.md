# CardGroove Taglist

Shared, versioned EMV tag and smart-card ATR reference data for the CardGroove
website and Windows viewer. Current release: **0.2.4**, with **113 tags**
and **5,199 ATR entries**. The initial snapshot matches the local CardGroove
website project. The website uses the generated tag module, including 33 profile-specific tag IDs
with 51 scoped meanings. The desktop integration can consume the XML export.

## Use the catalogs

Catalog maintenance tooling lives in the CardGroove website repository at
`scripts/taglist/`. Run the following commands from that website checkout,
with Node.js 20 or newer. The taglist tooling has no npm dependencies.
Replace `<taglist-checkout>` with the absolute path to this repository.

```sh
npm run test:taglist -- --catalog <taglist-checkout>
npm run build:taglist -- --catalog <taglist-checkout>
```

Generated artifacts in `dist/`:

| File | Consumer |
| --- | --- |
| `emv-tags.json` | Complete tag fields, including category and descriptions |
| `emv-tags.mjs` | Website-compatible `emvTags` and `filterEmvTags` exports |
| `atrs.json` | Website-compatible ATR catalog with source attribution |
| `reference.xml` | Qt resource tables for tags and ATRs |
| `manifest.json` | Catalog version, record counts and SHA-256 hashes |

Embed the XML through Qt resources. It contains only the `tags` and `atrs`
tables; retain the application's other tables when integrating it. Source,
category and comment columns are omitted from the XML presentation tables.
Full provenance remains in the JSON and source snapshots.

## Refresh and correct

Rebuild ATR data from the preserved upstream files, without network access:

```sh
npm run import:taglist:atrs -- --catalog <taglist-checkout>
```

Explicitly fetch updated upstream files and record their revisions/checksums:

```sh
npm run import:taglist:atrs -- --catalog <taglist-checkout> --online
```

The online command uses the current PC/SC list and resolves an OpenSC commit.
Review the diff, notices and matching behavior before releasing an update.
Imports update canonical data but preserve `overrides/`.

To bootstrap again from a local website checkout:

```sh
npm run import:taglist:website -- --catalog <taglist-checkout> --website <website-checkout>
```

Legacy TSV import is retired; obsolete files are excluded from distribution.
`import:taglist:website` replaces the canonical snapshot, so use it deliberately after
this repository becomes the shared source of truth.

Put reviewed CardGroove-specific additions/corrections in `overrides/tags.json`
or `overrides/atrs.json`. Each entry needs `action` (`add` or `replace`), a complete
`entry`, `reason`, and `reference`. Replacement preserves the existing tag/id;
adding an existing identifier is rejected. Never modify archived upstream files
to conceal a correction. Include source/license metadata for every ATR addition.

## Legacy review

`review/legacy-candidates.json` retains all 85 historical labels: 33
profile-specific IDs are active through reviewed overrides; 52 remain inactive.
ATR differences are not tracked; the active ATR catalog remains unchanged.
The [online tag review](review/ONLINE-TAG-REVIEW.md) checks all 85 IDs: 41 common
reference meanings, 29 profile-scoped meanings, 11 non-BER identifiers and four
unconfirmed legacy labels. The user subsequently approved the 29 profile-specific
IDs; see `review/activation-2026-10-28.json`. No common/unconfirmed candidates were
promoted in that activation.

Legacy tag labels may be proprietary, conflicting or incorrect. The old `9F79`
"Master Key" label is not evidence that a key can be read from a card.
The `00xx` entries need review as legacy identifiers, not automatic EMV tags.

## Releases

Bump this repository's `package.json` version after reviewing data changes,
then run from the website checkout:

```sh
npm run release:taglist -- --catalog <taglist-checkout>
```

This runs tests, builds exports and creates `releases/taglist-<version>.zip`.
Python 3 is required only for ZIP packaging (Windows: py -3; elsewhere: python3; override with PYTHON). Existing release archives are not
overwritten. Archives include original source snapshots, notices and licenses. Top-level
`lib/`, `scripts/`, and `tests/` live in the website repository; ATR reproduction
and transformation sources remain bundled under `dist/atr-source/`.
The obsolete taglist-only CI configuration has been removed. To configure CI,
check out both repositories and run the website commands above.
Consumers should pin an explicit release and verify `dist/manifest.json` hashes.

This repository is a reference catalog, not a card-identity authority or EMV
conformance test. An ATR can match several products; application profiles can
assign different meanings to the same tag.

## Attribution and licensing

See [DATA-LICENSES.md](DATA-LICENSES.md). The MIT license for new tooling does
not relicense imported data, historical material or separately licensed scripts.
Original snapshots, copyright notices and full GPL/LGPL texts are retained.


## Profile-aware tag consumers

Each added tag has a `profiles` array with its network(s), kernel where applicable,
documented version, source reference, name and original CardGroove explanation.
Shared tag IDs retain all checked meanings. Use `profilesForTag(tag, profile)` and
`filterEmvTags(query, category, profile)` from the generated JavaScript module.
Supported filter keys include `visa`, `mastercard`, `cb`, `kernel-2`, `kernel-3`,
`visa-icc-1.4`, `test-card`, `globalplatform`, and `common`.

Historical Visa and ELITT vendor test-card contexts are explicitly labelled.
Document versions identify the checked evidence, not the newest network profile.
The activation reviewed names/contexts, not all format/length constraints, so the
added entries say "See profile" and link to the relevant source. A general TLV
parser must not choose one network's meaning without application/kernel context.
The XML export uses a neutral name and includes a Profile / context column.

Re-importing the generated website module keeps matching approved additions in
overrides and rejects conflicting copies, preventing duplicate active tags.

Follow-up 0.2.1 adds four IDs with eight confirmed profile meanings; see
`review/activation-followup-2026-10-28.json`. Unverified historical labels are excluded.

Standalone dist artifacts include license texts, attribution and ATR reproduction sources. Active EMV tag-text licensing remains unresolved; see DATA-LICENSES.md.
