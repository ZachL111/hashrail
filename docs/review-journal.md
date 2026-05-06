# Review Journal

I treated `hashrail` as a project where the smallest useful behavior should still be inspectable.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its frontend and market data focus without claiming live deployment or external usage.

## Cases

- `baseline`: `tick pressure`, score 145, lane `ship`
- `stress`: `book depth`, score 178, lane `ship`
- `edge`: `view drift`, score 195, lane `ship`
- `recovery`: `render cost`, score 252, lane `ship`
- `stale`: `tick pressure`, score 176, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
