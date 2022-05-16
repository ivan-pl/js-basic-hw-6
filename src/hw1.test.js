import { task1 } from "./hw1";

describe("task1", () => {
  it('calls console.log with "mul = 12; sum = 8" for "task1(2, 6)"', () => {
    console.log = jest.fn();
    task1(2, 6);
    expect(console.log).toHaveBeenCalledWith("mul = 12; sum = 8");
  });

  it('calls console.log with "mul = 12; sum = 8" for "task1(6, 2)"', () => {
    console.log = jest.fn();
    task1(6, 2);
    expect(console.log).toHaveBeenCalledWith("mul = 12; sum = 8");
  });

  it('calls console.log with "mul = 1000; sum = 110" for "task1(100, 10)"', () => {
    console.log = jest.fn();
    task1(100, 10);
    expect(console.log).toHaveBeenCalledWith("mul = 1000; sum = 110");
  });
});
