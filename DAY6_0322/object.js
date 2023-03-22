// function add(num1, num2) {
//     return num1 + num2;
//   }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// let result = divide(2, 3);
// console.log(result);

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let result1 = calculator.add(3, 4);
let result2 = calculator.subtract(3, 4);
let result3 = calculator.multiply(3, 4);
let result4 = calculator.divide(3, 4);
console.log(result1, result2, result3, result4);
