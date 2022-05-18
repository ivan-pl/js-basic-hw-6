import { task1 } from "./hw2";

describe("task1", () => {
  const spy = jest.spyOn(console, "log");

  it("returns 5 for task1(1, 5)", () => {
    task1(1, 5);
    expect(spy).toBeCalledWith(5);
  });

  it("returns 5 for task1(5, 1)", () => {
    task1(5, 1);
    expect(spy).toBeCalledWith(5);
  });

  it("returns 0 for task1(0, -5)", () => {
    task1(0, -5);
    expect(spy).toBeCalledWith(0);
  });

  it("returns -3 for task1(-24, -3)", () => {
    task1(-24, -3);
    expect(spy).toBeCalledWith(-3);
  });
});
