import { task1, task2 } from "./hw3";

describe("task1", () => {
  const sum = (50 * (50 + 99)) / 2;
  it(`calls console.log with ${sum}`, () => {
    console.log = jest.fn();
    task1();
    expect(console.log).toBeCalledWith(sum);
  });
});

describe("task2", () => {
  console.log = jest.fn();

  it("calls console.log 9 times", () => {
    task2();
    expect(console.log.mock.calls).toHaveLength(9);
  });

  it("calls console.log with 1 argument", () => {
    task2();
    expect(console.log.mock.calls.every((item) => item.length === 1)).toBe(
      true
    );
  });

  it("first call console.log is 7 x 1 = 7", () => {
    task2();
    expect(console.log.mock.calls[0][0]).toBe("7 x 1 = 7");
  });

  it("last call console.log is 7 x 9 = 63", () => {
    task2();
    expect(console.log.mock.calls[console.log.mock.calls.length - 1][0]).toBe(
      "7 x 9 = 63"
    );
  });

  it("corresponds to template", () => {
    const template = Array.from(
      { length: 9 },
      (item, ind) => `7 x ${ind + 1} = ${(ind + 1) * 7}`
    );
    task2();
    expect(console.log.mock.calls.map((item) => item[0])).toEqual(template);
  });
});
