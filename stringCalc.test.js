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

it("should return sum of multiple numbers", () => {
    expect(add("5,2,2")).toBe(9);
});

it("should return sum of multiple numbers, more than three", () => {
    expect(add("5,2,2,1")).toBe(10);
});

it("should return sum even if there is a newline symbol in string", () => {
    expect(add("1 \n2,3")).toBe(6);
});

it("should throw exception when string contains negative numbers", () => {
    expect(add("-5")).toBe("Negatives are not allowed");
});