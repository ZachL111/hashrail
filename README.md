# hashrail

`hashrail` is a TypeScript project in frontend and market data. Its focus is to replay market ticks into an order book view model and WebSocket protocol fixture.

## Purpose

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Hashrail Review Notes

The first comparison I would make is `render cost` against `tick pressure` because it shows where the rule is most opinionated.

## What Is Covered

- `fixtures/domain_review.csv` adds cases for tick pressure and book depth.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/hashrail-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `render cost` and `tick pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Notes

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `tick pressure`, `book depth`, `view drift`, and `render cost`.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Command

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Audit Path

The check exercises the source code and the review fixture. `recovery` is the high score at 252; `baseline` is the low score at 145.

## Limits

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
