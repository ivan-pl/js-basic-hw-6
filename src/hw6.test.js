import { diff, isWord } from "./hw6";

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
