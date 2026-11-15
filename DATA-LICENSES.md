# Data and source licenses

This is a mixed-license collection. The root MIT license covers original repository tooling, not every data file.

- **Original tooling:** MIT, except files carrying a different license notice.
- **Combined ATR catalog:** GPL-2.0-or-later. PC/SC Tools data is copyright Ludovic Rousseau and contributors; selected OpenSC tables retain their authors' LGPL-2.1-or-later notices. Preserve all notices and both license texts.
- **ATR importer:** now maintained in the website repository at scripts/taglist/scripts/import-atrs.mjs and bundled in dist/atr-source/scripts/import-atrs.mjs; it retains GPL-2.0-or-later. Preserved source files keep their original notices. The matcher snapshot has no explicit independent license declaration; no new license is asserted for it here.
- **Active EMV tag text:** license unresolved. The preserved core source says its descriptions were written for CardGroove; README documents the profile explanations as original CardGroove wording. This is evidence of stated authorship, not a license grant. On 2026-11-04 the project owner instructed that tag-text licensing remain unresolved. Neither generated tags nor copied third-party text are relicensed as MIT. Tag identifiers and references do not confer rights to reproduce specification text.
- **Legacy TSVs:** sources/legacy/tags.tsv and atrs.tsv have been removed. Historical hashes remain in provenance/import.json; review records remain as audit evidence, not a cleared tag-text dataset. The release filter rejects the retired source directory.

## ATR distribution

Ship DISTRIBUTION-NOTICE.txt, ATR-NOTICE.txt, licenses/, and atr-source/ with the generated catalog. They preserve attribution, warranty disclaimers, original upstream snapshots, transformation source, changes and offline reproduction instructions. Keep the provenance in atrs.json even if a UI hides it. The XML contains ATR material under GPL-2.0-or-later and tag text with unresolved licensing; it is not wholly MIT.

Do not impose restrictions that contradict recipients' GPL/LGPL rights. This package's notices do not determine the license of a consuming application; embedding or combining it requires a review of that application's distribution.

The source ZIP includes the same materials in repository layout, with reproduction and transformation tooling under dist/atr-source/. The top-level maintenance lib/, scripts/ and tests/ have moved to the website repository; their existing licenses are unchanged. Copies previously distributed elsewhere are not changed by cleaning local archives.
