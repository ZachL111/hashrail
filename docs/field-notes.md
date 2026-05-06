# Field Notes

`hashrail` is easiest to review by starting with the fixture, not the prose.

The domain cases cover `tick pressure`, `book depth`, `view drift`, and `render cost`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

`recovery` is the strongest case at 252 on `render cost`. `baseline` is the cautious anchor at 145 on `tick pressure`.

The extra check gives the repository a behavior path that can fail for a domain reason, not only a syntax reason.
