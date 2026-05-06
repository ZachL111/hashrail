function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 53, slack: 23, drag: 22, confidence: 82 };
equal(domainReviewScore(item), 145);
equal(domainReviewLane(item), "ship");
