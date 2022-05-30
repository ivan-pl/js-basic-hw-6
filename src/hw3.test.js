import { task1, task2, task3 } from "./hw3";

describe("task1", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  const sum = (50 * (50 + 99)) / 2;
  it(`calls console.log with ${sum}`, () => {
    task1();
    expect(console.log).toBeCalledWith(sum);
  });
});

describe("task2", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("calls console.log 9 times", () => {
    task2();
    expect(console.log).toBeCalledTimes(9);
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

describe("task3", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("calls console.log with 1, 3, 5 for 6", () => {
    jest.spyOn(globalThis, "prompt").mockImplementationOnce(() => 6);
    task3();
    expect(console.log).toBeCalledWith("1, 3, 5");
  });

  it("calls console.log with 1, 3, 5 for 7", () => {
    jest.spyOn(globalThis, "prompt").mockImplementationOnce(() => 7);
    task3();
    expect(console.log).toBeCalledWith("1, 3, 5");
  });

  it("calls console.log with 1 for -5", () => {
    jest.spyOn(globalThis, "prompt").mockImplementationOnce(() => -5);
    task3();
    expect(console.log).toBeCalledWith("1");
  });

  it("calls console.log with 1, 3, 5, 7, 9 for 10", () => {
    jest.spyOn(globalThis, "prompt").mockImplementationOnce(() => 10);
    task3();
    expect(console.log).toBeCalledWith("1, 3, 5, 7, 9");
  });
});
