const { reverseKamus } = require('./global');

function convertToLetters(sum) {
  const isNegative = sum < 0;
  sum = Math.abs(sum);

  let result = "";
  let currentSum = 0;

  if (!isNegative) {
    for (let i = 0; i <= 4; i++) {
      result += i;
      currentSum += i;
    }

    let nextNumber = 0;
    while (currentSum < sum) {
      result += nextNumber;
      currentSum += nextNumber;
      nextNumber = nextNumber === 0 ? 1 : 0;
    }
  } else {
    for (let i = 0; i <= 5; i++) {
      result += i;
      currentSum += i;
    }

    let nextNumber = 0;
    while (currentSum < sum) {
      result += nextNumber;
      currentSum += nextNumber;
      nextNumber = nextNumber === 0 ? 1 : 0;
    }
  }

  let output = "";
  for (let char of result) {
    output += reverseKamus[char];
  }

  return output;
}

module.exports = convertToLetters;
