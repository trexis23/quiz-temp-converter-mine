import tryConvert from "./index.js";

test("100 Celsius = 212 Fahrenheit", () => {
  expect(tryConvert(100, "toFahrenheit")).toBe("212");
});

test("50 Fahrenheit = 10 Celsius", () => {
  expect(tryConvert(50, "toCelsius")).toBe("10");
});

test("Convert to Celsius with non-numerical input", () => {
  expect(tryConvert("toCelsius")).toBe("");
});

test("Convert to Fahrenheit with non-numerical input", () => {
  expect(tryConvert("toFahrenheit")).toBe("");
});
