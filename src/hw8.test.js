import { task1 } from "./hw8";

describe("task1", () => {
  beforeAll(() => {
    jest.spyOn(globalThis, "prompt");
    jest.spyOn(globalThis, "alert").mockReturnThis();
  });
  afterAll(() => {
    jest.clearAllMocks();
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
