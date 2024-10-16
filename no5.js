function classifyNumbers(numberString) {
    let classifiedResult = "";
    for (let char of numberString) {
      switch (char) {
        case "0":
        case "1":
          classifiedResult += "1";
          break;
        case "2":
        case "3":
          classifiedResult += "3";
          break;
        case "4":
        case "5":
          classifiedResult += "5";
          break;
        case "6":
        case "7":
          classifiedResult += "7";
          break;
        case "8":
        case "9":
          classifiedResult += "9";
          break;
        default:
          break;
      }
    }
    return classifiedResult;
  }
  
  function convertToSampleOutput(input) {
    let numberResult = require('./no4').lettersToNumber(input);
    let classifiedResult = classifyNumbers(numberResult);
    return classifiedResult;
  }
  
  module.exports = convertToSampleOutput;
  