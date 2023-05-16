import { describe, it, expect, test } from "vitest";

const sum = (...nums) => {
  return nums.reduce((a, b) => a + b, 0);
};

test("1+1", () => {
  expect(sum(1, 1)).toEqual(2);
});

test("3 NUMBERS", () => {
  expect(sum(1, 1, 10)).toEqual(12);
});

test("1+1", () => {
  expect(sum(1, 1, 100, 100)).toEqual(202);
});
