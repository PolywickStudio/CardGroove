# Contributing

Submit the ATR bytes or pattern, optional mask, a clear description, and the
source/reference plus licensing information. Use your own test card or public
documentation. Do not submit PANs, PINs, private keys, issuer keys or unrelated
personal data. An ATR match alone does not verify the card model.

For tags, include the application/profile, format, value length, description and
supporting specification/reference. Do not promote ambiguous historical labels
without review. Add corrections through `overrides/` with a reason and reference.

From the website checkout, run `npm run test:taglist -- --catalog <taglist-checkout>`
and `npm run build:taglist -- --catalog <taglist-checkout>`. Check duplicates, matching behavior, source
notices and export counts. Include a focused regression case for changed matching
or validation behavior. Reviewed changes receive a versioned release.
