import { diff } from "./hw6";

describe("diff", () => {
  it("returns 4 for 6, 10", () => {
    expect(diff(6, 10)).toBe(4);
  });

  it("returns 0 for 12, 12", () => {
    expect(diff(12, 12)).toBe(0);
  });

  it("returns 4 for -3, -7", () => {
    expect(diff(-3, -7)).toBe(4);
  });
});
