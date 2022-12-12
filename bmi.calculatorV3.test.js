const BMICalculator = require("./bmi_calculatorV3");
test("Checks if 40 / (1.8 * 1.8) is 12.345679012345679", () => {
    const answer = BMICalculator(40, 1.8);
    expect(answer.BMI).toBeCloseTo(12.35);
});

test("Checks if underweight", () => {
    const answer = BMICalculator(40, 1.8);
    expect(answer.Conclusion).toBe("You are underweight!");
});

test("Checks if Obese", () => {
    const answer = BMICalculator(80, 1.5);
    expect(answer.Conclusion).toBe("WTF, Obese!!!");
});

test("Checks if Normal", () => {
    const answer = BMICalculator(70, 1.5);
    expect(answer.Conclusion).toBe("WTF, Obese!!!");
});