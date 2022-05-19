import { task1 } from "./hw3";

describe("task1", () => {
  const sum = (50 * (50 + 99)) / 2;
  it(`calls console.log with ${sum}`, () => {
    console.log = jest.fn();
    task1();
    expect(console.log).toBeCalledWith(sum);
  });
});
