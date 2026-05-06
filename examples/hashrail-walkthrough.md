# Hashrail Walkthrough

This note is the quickest way to read the extra review model in `hashrail`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | tick pressure | 145 | ship |
| stress | book depth | 178 | ship |
| edge | view drift | 195 | ship |
| recovery | render cost | 252 | ship |
| stale | tick pressure | 176 | ship |

Start with `recovery` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

`recovery` is the optimistic case; use it to make sure the scoring path still rewards strong signal.
