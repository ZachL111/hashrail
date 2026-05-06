import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 53, slack: 23, drag: 22, confidence: 82 };
assert.equal(domainReviewScore(item), 145);
assert.equal(domainReviewLane(item), "ship");
