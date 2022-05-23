import { task1, task2, task3 } from "./hw5";

describe("task1", () => {
  it("returns 55 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    expect(task1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
  });

  it("returns 0 for [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]", () => {
    expect(task1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
});

describe("task2", () => {
  it("returns [2, 4, 6] for [1, 2, 3]", () => {
    expect(task2([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it("returns [0, 0, 0] for [0, 0, 0]", () => {
    expect(task2([0, 0, 0])).toEqual([0, 0, 0]);
  });
});

describe("task3", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  it("calls console.log only 1 time", () => {
    task3([1, 2, 3]);
    expect(console.log.mock.calls).toHaveLength(1);
  });

  it('calls console.log with "5, 1" for [2, 1, 5, 3]', () => {
    task3([2, 1, 5, 3]);
    expect(console.log).toBeCalledWith(5, 1);
  });

  it('calls console.log with "0, -7" for [-3, -4, 0, -7, -1]', () => {
    task3([-3, -4, 0, -7, -1]);
    expect(console.log).toBeCalledWith(0, -7);
  });
});
