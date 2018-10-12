const add = require("./stringCalc");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return sum of numbers when there are two numbers in the string", () => {
    expect(add("5,2")).toBe(7);
});

it("should return sum of multipler numbers", () => {
    expect(add("5,2,2")).toBe(9);
});