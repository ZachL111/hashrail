function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
