# Online review of the 85 legacy tag IDs

Checked 2026-10-28. This review covers names and profile allocations, not value formats, lengths or conformance. No reviewed candidates have been activated. The 13 ATR differences have been removed from the review list; the active ATR catalog is unchanged.

## Results

- **not-ber-tag: 11**
- **confirmed-common: 41**
- **confirmed-profile: 29**
- **legacy-label-unconfirmed: 4**

The common group is eligible for a future curated addition. Profile-specific entries need an application/kernel scope. A documented alternative meaning does not prove the old label is impossible in every proprietary profile. The `00xx` values are excluded as BER tags, not declared invalid in other identifier namespaces.

## Per-tag findings

| Tag | Outcome | Legacy label | Documented profile(s) |
| --- | --- | --- | --- |
| `00C5` | not-ber-tag | Card issuer action code online | EMV BER tag rules |
| `00C6` | not-ber-tag | PIN Try Limit | EMV BER tag rules |
| `00C7` | not-ber-tag | CDOL 1 Related Data Length | EMV BER tag rules |
| `00C8` | not-ber-tag | Card risk management country code | EMV BER tag rules |
| `00C9` | not-ber-tag | Card risk management currency code | EMV BER tag rules |
| `00CA` | not-ber-tag | Lower cummulative offline transaction amount | EMV BER tag rules |
| `00CB` | not-ber-tag | Upper cumulative offline transaction amount | EMV BER tag rules |
| `00D1` | not-ber-tag | Currency conversion table | EMV BER tag rules |
| `00D3` | not-ber-tag | Additional check table | EMV BER tag rules |
| `00D5` | not-ber-tag | Application Control | EMV BER tag rules |
| `00D6` | not-ber-tag | Default ARPC response code | EMV BER tag rules |
| `42` | confirmed-common | Issuer Identification Number (IIN) | EMV contact 4.3 |
| `52` | confirmed-common | Command To Perform | ISO/IEC 7816 interindustry |
| `56` | confirmed-profile | Track 1 Data | EMV Contactless Kernel 2 v2.6 |
| `5F50` | confirmed-common | Issuer URL | EMV contact 4.3 |
| `5F53` | confirmed-common | International Bank Account Number (IBAN) | EMV contact 4.3 |
| `5F54` | confirmed-common | Bank Identifier Code (BIC) | EMV contact 4.3 |
| `5F55` | confirmed-common | Issuer Country Code (alpha2 format) | EMV contact 4.3 |
| `5F56` | confirmed-common | Issuer Country Code (alpha3 format) | EMV contact 4.3 |
| `73` | confirmed-common | Directory Discretionary Template | EMV contact 4.3 |
| `81` | confirmed-common | Amount, Authorised (Binary) | EMV contact 4.3 |
| `89` | confirmed-common | Authorisation Code | EMV contact 4.3 |
| `99` | confirmed-common | Transaction PIN Data | EMV contact 4.3 |
| `9D` | confirmed-common | Directory Definition File (DDF) Name | EMV contact 4.3 |
| `9F01` | confirmed-common | Acquirer Identifier | EMV contact 4.3 |
| `9F04` | confirmed-common | Amount, Other (Binary) | EMV contact 4.3 |
| `9F05` | confirmed-common | Application Discretionary Data | EMV contact 4.3 |
| `9F0B` | confirmed-common | Cardholder Name Extended | EMV contact 4.3 |
| `9F0D` | confirmed-common | Issuer Action Code - Default | EMV contact 4.3 |
| `9F0E` | confirmed-common | Issuer Action Code - Denial | EMV contact 4.3 |
| `9F0F` | confirmed-common | Issuer Action Code - Online | EMV contact 4.3 |
| `9F14` | confirmed-common | Lower Consecutive Offline Limit (EMV Generic) | EMV contact 4.3 |
| `9F15` | confirmed-common | Merchant Category Code | EMV contact 4.3 |
| `9F16` | confirmed-common | Merchant Identifier | EMV contact 4.3 |
| `9F1B` | confirmed-common | Terminal Floor Limit | EMV contact 4.3 |
| `9F1C` | confirmed-common | Terminal Identification | EMV contact 4.3 |
| `9F1D` | confirmed-common | Terminal Risk Management Data | EMV contact 4.3 |
| `9F1F` | confirmed-common | Track 1 Discretion Data | EMV contact 4.3 |
| `9F20` | confirmed-common | Track 2 Discretion Data | EMV contact 4.3 |
| `9F22` | confirmed-common | Certification Authority Public Key Index | EMV contact 4.3 |
| `9F23` | confirmed-common | Upper Consecutive Offline Limit (UCOL) | EMV contact 4.3 |
| `9F2D` | confirmed-common | ICC PIN Encipherment Public Key Certificate | EMV contact 4.3 |
| `9F2E` | confirmed-common | ICC PIN Encipherment Public Key Exponent | EMV contact 4.3 |
| `9F2F` | confirmed-common | ICC PIN Encipherment Public Key Remainder | EMV contact 4.3 |
| `9F39` | confirmed-common | POS Entry Mode | EMV contact 4.3 |
| `9F3A` | confirmed-common | Amount,Reference Currency | EMV contact 4.3 |
| `9F3B` | confirmed-common | Application Reference Currency | EMV contact 4.3 |
| `9F3C` | confirmed-common | Transaction Reference Currency Code | EMV contact 4.3 |
| `9F3D` | confirmed-common | Transaction Reference Currency Exponent | EMV contact 4.3 |
| `9F43` | confirmed-common | Application Reference Currency Exponent | EMV contact 4.3 |
| `9F4D` | confirmed-common | Log Entry | EMV contact 4.3 |
| `9F4E` | confirmed-common | Merchant Name and Location | EMV contact 4.3 |
| `9F4F` | confirmed-common | Log Format | EMV contact 4.3 |
| `9F51` | confirmed-profile | Application Currency Code | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F52` | confirmed-profile | Application Default Action (ADA)  /  Application Default Action | Visa Public ICC 1.4.0 (historical) |
| `9F53` | confirmed-profile | Consecutive Transaction Counter International Limit | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F54` | confirmed-profile | Cumulative Total Transaction Amount Limit (CTTAL) | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F55` | legacy-label-unconfirmed | Issuer Authentication Flags | Visa Public ICC 1.4.0 (historical) |
| `9F56` | confirmed-profile | Issuer Authentication Indicator | Visa Public ICC 1.4.0 (historical) |
| `9F58` | confirmed-profile | Consecutive Transaction Counter Limit (CTCL)  /  Lower Consecutive Offline Limit (Proprietary) | Visa Public ICC 1.4.0 (historical) |
| `9F59` | confirmed-profile | Consecutive Transaction Counter Upper Limit (CTCUL)  /  Upper Consecutive Offline Limit (Proprietary) | Visa Public ICC 1.4.0 (historical) |
| `9F5B` | confirmed-profile | DSDOL | EMV Contactless Kernel 2 v2.6; EMV Contactless Kernel 3 v2.11 |
| `9F5C` | confirmed-profile | Cumulative Total Transaction Amount Upper Limit (CTTAUL) | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F5D` | confirmed-profile | Application Capabilities Information | EMV Contactless Kernel 2 v2.6; EMV Contactless Kernel 3 v2.11 |
| `9F5E` | confirmed-profile | DS ID | EMV Contactless Kernel 2 v2.6 |
| `9F60` | confirmed-profile | CVC3TRACK1 | EMV Contactless Kernel 2 v2.6 |
| `9F61` | confirmed-profile | CVC3TRACK2 | EMV Contactless Kernel 2 v2.6 |
| `9F62` | confirmed-profile | MTrack 1 Bit Map for CVC3 | EMV Contactless Kernel 2 v2.6 |
| `9F63` | confirmed-profile | Track 1 Bit Map for UN and ATC | EMV Contactless Kernel 2 v2.6 |
| `9F64` | confirmed-profile | Track 1 Nr of ATC Digits | EMV Contactless Kernel 2 v2.6 |
| `9F65` | confirmed-profile | Track 2 Bit Map for CVC3 | EMV Contactless Kernel 2 v2.6 |
| `9F66` | confirmed-profile | Track 2 Bit Map for UN and ATC | EMV Contactless Kernel 2 v2.6; EMV Contactless Kernel 3 v2.11 |
| `9F67` | confirmed-profile | Track 2 Nr of ATC Digits | EMV Contactless Kernel 2 v2.6 |
| `9F69` | confirmed-profile | Card Authentication Related Data | EMV Contactless Kernel 2 v2.6; EMV Contactless Kernel 3 v2.11 |
| `9F6B` | confirmed-profile | Track 2 Data | EMV Contactless Kernel 2 v2.6 |
| `9F6C` | legacy-label-unconfirmed | Mag Stripe Application Version Number | EMV Contactless Kernel 3 v2.11 |
| `9F72` | confirmed-profile | Consecutive Transaction Limit (international - country) | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F73` | confirmed-profile | Currency Conversion Factor | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F75` | confirmed-profile | Cumulative Total Transaction Amount Limit-Dual Currency  /  Cumulative Total Transaction Amount Limit - Dual Currency | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F76` | confirmed-profile | Secondary Application Currency Code | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6 |
| `9F79` | legacy-label-unconfirmed | Master Key (MDK) | EMV Contactless Kernel 2 v2.6; Visa Public ICC 1.4.0 VLP (historical) |
| `9F7F` | confirmed-profile | Card Product Life Cycle History File Identifiers | Visa Public ICC 1.4.0 (historical); EMV Contactless Kernel 2 v2.6; GlobalPlatform card-management context |
| `C3` | confirmed-profile | Card issuer action code -decline | ELITT CB / Mastercard test-card profile v1.7 |
| `C4` | confirmed-profile | Card issuer action code -default | ELITT CB / Mastercard test-card profile v1.7 |
| `DF62` | legacy-label-unconfirmed | Application Selection Flag [Canada] | EMV Contactless Kernel 2 v2.6; ELITT CB test-card profile v1.7 |

Machine-readable evidence, source IDs, locators and exceptions are in [online-tag-audit.json](online-tag-audit.json).

## Sources

- **emv43-book3**: [EMVCo - EMV 4.3 Book 3, Application Specification](https://www.emvco.com/emv-technologies/emv-contact-chip/), November 2011. Annex A, Table 34, printed pages 150-154; Annex B1, printed page 156. Public transcription of the EMVCo-authored specification; not the publisher host. 
- **kernel2-26**: [EMVCo - EMV Contactless Book C-2, Kernel 2 Specification](https://www.emvco.com/emvco-website-search/?post_id=91725&type=specifications), 2.6, February 2016. Annex A.2, printed pages 553-556; Annex A.1 for individual definitions. Public mirror of EMVCo-authored PDF. 
- **kernel3-211**: [EMVCo - EMV Contactless Book C-3, Kernel 3 Specification](https://www.emvco.com/emvco-website-search/?post_id=91727&type=specifications), 2.11, June 2023. Annex A data dictionary and tag index, printed pages 119-120. Public transcription of the EMVCo-authored specification; not the publisher host. 
- **visa-public-14**: [Visa - Visa Integrated Circuit Card Card Specification](https://digitalpartnerservices.visaonline.com/Document), 1.4.0, Visa Public, 31 October 2001. Appendix A, Table A-4, printed pages A-63/A-64; individual definitions in Table A-1. Public transcription of a historical document marked Visa Public. Historical profile evidence only; not confirmation of a current Visa profile.
- **iso7816-6-1996**: [ISO/IEC - ISO/IEC 7816-6:1996 preview](https://cdn.standards.iteh.ai/samples/24183/f9cc937c09f44ed086c88fa9a0899fdf/ISO-IEC-7816-6-1996.pdf), 1996. IDO list and wrapper discussion, PDF pages 7 and 9. Standards preview. 
- **elitt-17**: [ELITT - Instructions for use: CB test cards and CB development cards](https://testcards.elitt.com/wp-content/uploads/2024/03/ELITT_Notice_Cartes_CB_test_developpement_v1.7_V19_20EN.pdf), 1.7, 8 February 2024. PDF pages 23-24 (C3/C4), 29 (9F51/9F52), 24/30 (DF62). Test-card vendor publisher. Evidence about the vendor test-card profiles; not a universal tag allocation.
- **gp-gpshell**: [GlobalPlatform library / GPShell maintainers - GPShell command manual](https://github.com/kaoh/globalplatform/blob/master/gpshell/src/gpshell.1.md), Online repository checked 2026-10-28. get_data identifiers and Format of CPLC data. Implementation maintainer documentation. Implementation evidence for GlobalPlatform CPLC, not an official EMV allocation.

Only bibliographic metadata, tag identifiers, short labels and review findings are stored. Full specifications were not added to the repository.


## Subsequent activation

The user approved publication of the 29 confirmed profile-specific tag IDs with
explicit contexts. See [activation-2026-10-28.json](activation-2026-10-28.json).
That activation adds 43 scoped meanings. The audit above records the earlier
review state; common, non-BER and unconfirmed legacy candidates remain inactive.
