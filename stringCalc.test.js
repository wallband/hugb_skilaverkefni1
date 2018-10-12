const add = require("./stringCalc");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});