sumOfPrositivesAndNegatives
const sumOfPrositivesAndNegatives = (input) => {
  let sumPositiv = 0;
  let sumNegativ = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sumPositiv += input[i];
    } else {
      sumNegativ += input[i];
    }
  }
  return [sumPositiv, sumNegativ];
};

let input = [1, 3, -4, 2, -13, -7];
console.log(sumOfPrositivesAndNegatives(input));

// Square All
const squareAll = (arr) => {
  let newarr = arr.map((val) => {
    return val * val;
  });

  return newarr;
};

input = [1, 2, 3, 4, 5, 9];
console.log(squareAll(input));

// Plus Minus
const plusMinus = (arr) => {
  let operator = "plus";
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (operator == "plus") {
      result += arr[i];
      operator = "minus";
    } else if (operator == "minus") {
      result -= arr[i];
      operator = "plus";
    }
  }
  return result;
};

let input = [1, 2, 3, 4, 5, 9];
console.log(plusMinus(input));