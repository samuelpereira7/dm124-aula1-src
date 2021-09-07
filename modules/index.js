const BMIService = require('./bmi-service');

const decimalDigits = 2;
const height = 1.78;
const weight = 89;

const bmi = BMIService
    .getIndex(weight, height)
    .toFixed(decimalDigits);

console.log('BMI is: ' + bmi);