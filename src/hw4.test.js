import { task1 } from "./hw4";

describe("task1", () => {
  beforeEach(() => {
    jest.spyOn(globalThis, "prompt").mockReturnValue(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns Object", () => {
    expect(typeof task1()).toBe("object");
  });

  it('contains property name = "John"', () => {
    expect(task1().name).toBe("John");
  });

  it('property "age" contains 5', () => {
    jest.spyOn(globalThis, "prompt").mockReturnValue(5);
    expect(task1().age).toBe(5);
  });
});
