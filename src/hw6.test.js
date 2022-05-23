import { diff, isWord, pow } from "./hw6";

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

describe("isWord", () => {
  it('returns true for "someWord"', () => {
    expect(isWord("someWord")).toBeTruthy();
  });

  it('returns false for "some word"', () => {
    expect(isWord("some word")).toBeFalsy();
  });

  it('returns false for "someWord!"', () => {
    expect(isWord("someWord!")).toBeFalsy();
  });

  it('returns false for ""', () => {
    expect(isWord("")).toBeFalsy();
  });
});

describe("pow", () => {
  it("returns 9 for (3, 2)", () => {
    expect(pow(3, 2)).toBe(9);
  });

  it("returns 8 for (2, 3)", () => {
    expect(pow(2, 3)).toBe(8);
  });

  it("returns 32 for (2, 5)", () => {
    expect(pow(2, 5)).toBe(32);
  });

  it("returns 32 for (23, 0)", () => {
    expect(pow(23, 0)).toBe(1);
  });
});
