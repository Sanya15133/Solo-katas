const calculateDivisors = require("../calculate-divisors/calculate-divisors.js");

describe("calculateDivisors", () => {
  test("should return a number", () => {
    const input = calculateDivisors(2);
    const output = 2;
    expect(typeof output).toBe("number");
  });
  test("should return single-digit divisors total", () => {
    const input = calculateDivisors(9);
    const output = 14;
    expect(input).toBe(output);
  });
  test("should return double-digit divisors total", () => {
    const input = calculateDivisors(11);
    const output = 33;
    expect(input).toBe(output);
  });
});

