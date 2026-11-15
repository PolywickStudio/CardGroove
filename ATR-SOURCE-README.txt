ATR reproduction source for CardGroove Taglist

This directory accompanies generated ATR data. Original source files and their notices are in sources/upstream/. The current importer is scripts/import-atrs.mjs; its parser is sources/website/atr-catalog.mjs (the archived upstream notice refers to the parser's former location).

With Node.js 20 or newer, run from this directory:
  node scripts/import-atrs.mjs

The default mode is offline and regenerates data/atrs.json from the bundled upstream files. --online explicitly downloads a new revision; do not use it to reproduce this snapshot. Overrides, if any, are in overrides/atrs.json; apply each add/replace entry by id after regeneration, preserving all other entries. The bundled tooling/lib/catalog.mjs and tooling/scripts/build.mjs implement this step. They are maintained in the website repository at scripts/taglist/. To rebuild all exports, set TAGLIST_ROOT to the absolute path of the full taglist checkout and run node tooling/scripts/build.mjs from this reproduction directory. No licenses have changed.

The shipped data/atrs.json is the base source snapshot. The top-level distributed atrs.json includes approved overrides. Original upstream files, both license texts, provenance and the importer are supplied together. No third-party license has been changed.
