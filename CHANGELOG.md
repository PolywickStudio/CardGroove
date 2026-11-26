## Unreleased

Move maintenance lib/, scripts/ and tests/ into the website repository under scripts/taglist/. Run maintenance through the website npm commands with an explicit catalog checkout. Remove the obsolete standalone CI pipeline. Keep existing licenses and bundle ATR reproduction/transformation sources in dist/atr-source/.

## 0.2.5

Refresh the PC/SC Tools list and selected OpenSC drivers on 2026-11-26. Add 27 unique ATR entries and update descriptions for nine existing entries. The catalog now contains 5,226 ATRs.

## 0.2.4

Remove legacy TSV snapshots and their import route; exclude them from releases. Bundle notices, GPL/LGPL texts and offline ATR reproduction sources in dist. Clarify unresolved tag-text licensing and mixed-license package metadata.

## 0.2.3

Link historical Visa ICC references to the official Visa Digital Partner Services library, retaining historical version citations and clarifying the library destination.

## 0.2.2

Use official EMVCo document pages for EMVCo-authored specifications. Keep the documented profile versions and the original publishers for network/vendor-specific references.

## 0.2.1

Add confirmed profile definitions for 9F55, 9F6C, 9F79 and DF62 (113 tags, 51 scoped meanings). Preserve the original audit and add follow-up evidence.

# Changes

## 0.2.0 - 2026-10-28

- Activated 29 reviewed profile-specific tag IDs with 43 scoped meanings.
- Added Visa, Mastercard, Kernel 2/3, historical Visa, GlobalPlatform and vendor
  test-card context, source links and network/profile filtering.
- Expanded exports to 109 tag IDs; preserved neutral XML labels for shared tags.
- Prevented duplicate additions when re-importing the expanded website module.

## 0.1.1 - 2026-10-28

- Removed all 13 ATR difference candidates and their generation/coverage review.
  The active 5,199-entry ATR catalog is unchanged.
- Reviewed all 85 older tag IDs online, recording profile/version-specific source
  references and separating confirmed meanings from unconfirmed legacy labels.
- Kept all candidate tags inactive; the active tag catalog remains at 80 entries.
- Preserved applicable completed tag reviews when importing matching legacy rows.
- Restricted release packaging to explicit project paths; research downloads and
  other unrelated local files are excluded.

## 0.1.0 - 2026-10-28

- Seeded the shared tag and ATR repository, importers, exports and tests.
