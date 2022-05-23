import fs from "fs";
import path from "path";
import { setBehavior } from "./hw7";

const html = fs.readFileSync(path.resolve(__dirname, "hw7.html"), "utf8");

describe("checking markup", () => {
  beforeEach(() => {
    document.body.innerHTML = html;
  });

  it("contains 3 paragraphs", () => {
    expect(document.querySelectorAll("p")).toHaveLength(3);
  });

  it("contains 1 input", () => {
    expect(document.querySelectorAll("input")).toHaveLength(1);
  });

  it("contains 1 button", () => {
    expect(document.querySelectorAll("button")).toHaveLength(1);
  });
});

describe("task1", () => {
  beforeEach(() => {
    document.body.innerHTML = html;
    setBehavior();
  });

  it("the button is initially hidden", () => {
    const button = document.querySelector("button");
    expect(button.hidden).toBe(true);
  });

  it("button visibility depends on input values", () => {
    const button = document.querySelector("button");
    const input = document.querySelector("input");

    input.value = "some text";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(false);

    input.value = "";
    input.dispatchEvent(new Event("input"));
    expect(button.hidden).toBe(true);
  });
});
