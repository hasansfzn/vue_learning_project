import { describe, it, expect, test } from "vitest";

const sum = (a, b) => {
  return a + b;
};

test("1+1", () => {
  expect(sum(1, 1)).toEqual(2);
});
