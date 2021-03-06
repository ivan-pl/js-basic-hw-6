import { task1, task2, task3 } from "./hw2";

describe("task1", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("calls console.log with 5 for task1(1, 5)", () => {
    task1(1, 5);
    expect(console.log).toBeCalledWith(5);
  });

  it("calls console.log with 5 for task1(5, 1)", () => {
    task1(5, 1);
    expect(console.log).toBeCalledWith(5);
  });

  it("calls console.log with 0 for task1(0, -5)", () => {
    task1(0, -5);
    expect(console.log).toBeCalledWith(0);
  });

  it("calls console.log with -3 for task1(-24, -3)", () => {
    task1(-24, -3);
    expect(console.log).toBeCalledWith(-3);
  });
});

describe("task2", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("calls console.log with Январь for 1", () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => 1);
    task2();
    expect(console.log).toBeCalledWith("Январь");
  });

  it("calls console.log with Февраль for 2", () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => 2);
    task2();
    expect(console.log).toBeCalledWith("Февраль");
  });

  it("calls console.log with Декабрь for 12", () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => 12);
    task2();
    expect(console.log).toBeCalledWith("Декабрь");
  });
});

describe("task3", () => {
  it("returns true for task3(50, 9)", () => {
    expect(task3(50, 9)).toBeTruthy();
  });

  it("returns false for task3(50, 16)", () => {
    expect(task3(50, 16)).toBeFalsy();
  });

  it("returns true for task3(50, 1)", () => {
    expect(task3(50, 1)).toBeTruthy();
  });

  it("returns false for task3(1, 16)", () => {
    expect(task3(1, 16)).toBeFalsy();
  });
});
