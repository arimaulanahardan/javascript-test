function alternatingSum(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        total += parseInt(input[i]);
      } else if (i % 2 === 0) {
        total -= parseInt(input[i]);
      } else {
        total += parseInt(input[i]);
      }
    }
    return total;
  }
  
  module.exports = alternatingSum;
  