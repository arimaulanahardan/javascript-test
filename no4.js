const { reverseKamus } = require('./global');

function lettersToNumber(input) {
  let result = "";
  for (let char of input) {
    for (let key in reverseKamus) {
      if (reverseKamus[key] === char) {
        result += key;
        break;
      }
    }
  }
  return result;
}

function convertFromResult(result) {
  let numberResult = lettersToNumber(result);
  numberResult = numberResult.slice(0, -2) + "12";
  let finalResult = "";
  for (let char of numberResult) {
    finalResult += reverseKamus[char];
  }

  return finalResult;
}

module.exports = { lettersToNumber, convertFromResult };
