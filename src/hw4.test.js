import { task1, task2, task3 } from "./hw4";

describe("task1", () => {
  beforeEach(() => {
    jest.spyOn(globalThis, "prompt").mockReturnValue(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns object", () => {
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

describe("task2", () => {
  let user = { name: "John" };

  afterEach(() => {
    user = { name: "John" };
  });

  it("returns object", () => {
    expect(typeof task2(user)).toBe("object");
  });

  it("is another object", () => {
    expect(task2(user)).not.toBe(user);
  });

  it('contains property name = "John"', () => {
    expect(task2(user).name).toBe("John");
  });

  it('property "role" contains "admin"', () => {
    expect(task2(user).role).toBe("admin");
  });
});

describe("task3", () => {
  let admin = {
    name: "John",
    role: "admin",
  };

  afterEach(() => {
    admin = {
      name: "John",
      role: "admin",
    };
  });

  it("returns array", () => {
    expect(task3(admin)).toBeInstanceOf(Array);
  });

  it('return ["John", "admin"]', () => {
    expect(task3(admin)).toEqual(["John", "admin"]);
  });
});
