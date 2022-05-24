import { isRightTriangle, task2 } from "./hw9";

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

describe("task2", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  it('calls console.log with "C = 12.566; S = 12.566" for R = 2', () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue(2);
    task2();
    expect(console.log).toBeCalledWith("C = 12.566; S = 12.566");
  });

  it('calls console.log with "C = 94.248; S = 706.858" for R = 15', () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue(15);
    task2();
    expect(console.log).toBeCalledWith("C = 94.248; S = 706.858");
  });
});
