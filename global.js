const reverseKamus = {
    0: "A",
    1: "B",
    2: "E",
    3: "F",
    4: "I",
    5: "J",
    6: "O",
    7: "P",
    8: "U",
    9: "W",
  };
  
  // Validasi Input
  function isValidInput(input) {
    return /^[A-Za-z\s]+$/.test(input);
  }
  
  module.exports = { reverseKamus, isValidInput };
  