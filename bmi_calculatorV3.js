
function BMICalculator(weight, height){
    let BMI = (weight / (height * height));
    let Conclusion;
    if(BMI < 18.5){
        Conclusion = "You are underweight!";
} else if((BMI >= 18.5) && (BMI <= 24.9)){
           Conclusion = "Normal, Healthy Weight Range.";
} else if((BMI >= 25) && (BMI <= 29.9)){
            Conclusion = "Over Weight Range.";
} else if(BMI >= 30){
            Conclusion = "WTF, Obese!!!";
}
return {
    BMI,
    Conclusion
};
}

// manual tests
// 40 / (1.8*1.8) = 12.35 ==> underweight? TRUE!
// 70 / (1.8*1.8) = 21.60 ==> NORMAL? TRUE!
// 90 / (1.8*1.8) = 27.78 ==> overweight? TRUE!
// 100 / (1.8*1.8) = 30.86 ==> OBESE? TRUE!

console.log(BMICalculator(40, 1.8));
console.log(BMICalculator(70, 1.8));
console.log(BMICalculator(90, 1.8));
console.log(BMICalculator(100, 1.8));


module.exports = BMICalculator;
