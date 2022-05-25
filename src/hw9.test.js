import { isRightTriangle, task2, task3 } from "./hw9";

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

describe("task3", () => {
  beforeAll(() => {
    jest.spyOn(globalThis, "alert").mockReturnThis();
  });

  it("calls alert with 2, -2 for 2 0 -8", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValueOnce("2 0 -8");
    task3();

    expect(alert.mock.calls).toHaveLength(1);
    const results = alert.mock.calls[0][0];
    expect(typeof results).toBe("string");

    const resultsArray = results.split(", ");
    expect(resultsArray).toHaveLength(2);
    expect(resultsArray).toEqual(expect.arrayContaining(["2", "-2"]));
  });

  it("calls alert with 0, -3 for 2 6 0", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValueOnce("2 6 0");
    task3();

    expect(alert.mock.calls).toHaveLength(1);
    const results = alert.mock.calls[0][0];
    expect(typeof results).toBe("string");

    const resultsArray = results.split(", ");
    expect(resultsArray).toHaveLength(2);
    expect(resultsArray).toEqual(expect.arrayContaining(["0", "-3"]));
  });

  it("calls alert with 1, -3 for 1 2 -3", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValueOnce("1 2 -3");
    task3();

    expect(alert.mock.calls).toHaveLength(1);
    const results = alert.mock.calls[0][0];
    expect(typeof results).toBe("string");

    const resultsArray = results.split(", ");
    expect(resultsArray).toHaveLength(2);
    expect(resultsArray).toEqual(expect.arrayContaining(["1", "-3"]));
  });

  it("calls alert with 3 for 1 -6 9", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue("1 -6 9");
    task3();

    expect(alert.mock.calls).toHaveLength(1);
    const result = alert.mock.calls[0][0];
    expect(result).toBe("3");
  });
});
