import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 90,
    "capacity": 72,
    "latency": 13,
    "risk": 7,
    "weight": 7,
    "score": 193,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 82,
    "capacity": 73,
    "latency": 21,
    "risk": 21,
    "weight": 8,
    "score": 93,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 105,
    "capacity": 97,
    "latency": 15,
    "risk": 8,
    "weight": 5,
    "score": 230,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
