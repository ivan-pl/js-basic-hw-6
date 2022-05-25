import { isDate, isEmail } from "./hw10";

describe("task1", () => {
  it("returns true for 12.11.2012", () => {
    expect(isDate("12.11.2012")).toBe(true);
  });

  it("returns true for 02.06.1897", () => {
    expect(isDate("02.06.1897")).toBe(true);
  });

  it("returns true for someString", () => {
    expect(isDate("someString")).toBe(false);
  });

  it("returns false for 112.11.2012", () => {
    expect(isDate("112.11.2012")).toBe(false);
  });

  it("returns false for 12.111.2012", () => {
    expect(isDate("12.111.2012")).toBe(false);
  });

  it("returns false for a2.111.2012", () => {
    expect(isDate("a2.111.2012")).toBe(false);
  });

  it("returns false for 11.b1.2012", () => {
    expect(isDate("11.b1.2012")).toBe(false);
  });

  it("returns false for asd.11-2012", () => {
    expect(isDate("asd.11-2012")).toBe(false);
  });
});

describe("task2", () => {
  it("returns true for any@email.gom", () => {
    expect(isEmail("any@email.gom")).toBe(true);
  });

  it("returns true for one-more@email.ru", () => {
    expect(isEmail("one-more@email.ru")).toBe(true);
  });

  it("returns false for someString", () => {
    expect(isEmail("someString")).toBe(false);
  });

  it("returns false for site.ru", () => {
    expect(isEmail("site.ru")).toBe(false);
  });

  it("returns false for 2@mail", () => {
    expect(isEmail("2@mail")).toBe(false);
  });
});
