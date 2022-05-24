import { task1, task2, task3 } from "./hw8";

describe("task1", () => {
  beforeAll(() => {
    jest.spyOn(globalThis, "prompt");
    jest.spyOn(globalThis, "alert").mockReturnThis();
  });

  it("returns Monday for 09.05.2022", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue("09.05.2022");

    task1();
    expect(alert).toBeCalledWith("Monday");
  });

  it("returns Wednesday for 01.01.2020", () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue("01.01.2020");

    task1();
    expect(alert).toBeCalledWith("Wednesday");
  });
});

describe("task2", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  it("returns 845 for time = 14:05", () => {
    jest
      .spyOn(Date, "now")
      .mockImplementation(() => new Date("2020-01-01T14:05").getTime());
    task2();
    expect(console.log).toBeCalledWith(845);
  });

  it("returns 214 for time = 03:34", () => {
    jest
      .spyOn(Date, "now")
      .mockImplementation(() => new Date("2022-02-10T03:34").getTime());
    task2();
    expect(console.log).toBeCalledWith(214);
  });
});

describe("task3", () => {
  beforeAll(() => {
    jest.spyOn(globalThis, "alert").mockReturnThis();
  });

  it('returns "Second user is younger" for task3(new Date(1994, 5, 1), new Date(2001, 2, 4))', () => {
    task3(new Date(1994, 5, 1), new Date(2001, 2, 4));
    expect(alert).toBeCalledWith("Second user is younger");
  });

  it('returns "First user is younger" for task3(new Date(2001, 2, 4), new Date(1994, 5, 1))', () => {
    task3(new Date(2001, 2, 4), new Date(1994, 5, 1));
    expect(alert).toBeCalledWith("First user is younger");
  });

  it('returns "Second user is younger" for task3(new Date(2001, 2, 3), new Date(2001, 2, 4))', () => {
    task3(new Date(2001, 2, 3), new Date(2001, 2, 4));
    expect(alert).toBeCalledWith("Second user is younger");
  });
});
