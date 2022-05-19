import { task1, task2, task3 } from "./hw1";

describe("task1", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('calls console.log with "mul = 12; sum = 8" for "task1(2, 6)"', () => {
    task1(2, 6);
    expect(console.log).toHaveBeenCalledWith("mul = 12; sum = 8");
  });

  it('calls console.log with "mul = 12; sum = 8" for "task1(6, 2)"', () => {
    task1(6, 2);
    expect(console.log).toHaveBeenCalledWith("mul = 12; sum = 8");
  });

  it('calls console.log with "mul = 1000; sum = 110" for "task1(100, 10)"', () => {
    task1(100, 10);
    expect(console.log).toHaveBeenCalledWith("mul = 1000; sum = 110");
  });
});

describe("task2", () => {
  it('returns 8 for task2("John", "Cena")', () => {
    expect(task2("John", "Cena")).toBe(8);
  });

  it('returns 19 for task2("Benedict", "Cumberbatch")', () => {
    expect(task2("Benedict", "Cumberbatch")).toBe(19);
  });

  it('returns 7 for task2("123", "4567")', () => {
    expect(task2("123", "4567")).toBe(7);
  });
});

describe("task3", () => {
  it('returns 6 when prompt gets "123"', () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => "123");
    expect(task3()).toBe(6);
  });

  it('returns 3 when prompt gets "111"', () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => "111");
    expect(task3()).toBe(3);
  });

  it('returns 3 when prompt gets "000"', () => {
    jest.spyOn(globalThis, "prompt").mockImplementation(() => "000");
    expect(task3()).toBe(0);
  });
});
