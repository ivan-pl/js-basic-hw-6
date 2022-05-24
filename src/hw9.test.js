import { isRightTriangle } from "./hw9";

describe("task1", () => {
  it("returns true for isRightTriangle(3, 4, 5)", () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
  });

  it("returns true for isRightTriangle(4, 5, 3)", () => {
    expect(isRightTriangle(4, 5, 3)).toBe(true);
  });

  it("returns false for isRightTriangle(4, 2, 5)", () => {
    expect(isRightTriangle(2, 4, 5)).toBe(false);
  });

  it("returns true for isRightTriangle(1, 2.236, 2)", () => {
    expect(isRightTriangle(1, 2.236, 2)).toBe(true);
  });
});
