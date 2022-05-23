import { task1, task2 } from "./hw5";

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
