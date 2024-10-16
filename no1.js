const { reverseKamus } = require('./global');

function convertToNumber(input) {
  const kamus = {
    A: 0,
    B: 1,
    C: 1,
    D: 1,
    E: 2,
    F: 3,
    G: 3,
    H: 3,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 5,
    N: 5,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 7,
    U: 8,
    V: 9,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
    a: 9,
    b: 8,
    c: 8,
    d: 8,
    e: 7,
    f: 6,
    g: 6,
    h: 6,
    i: 5,
    j: 4,
    k: 4,
    l: 4,
    m: 4,
    n: 4,
    o: 3,
    p: 2,
    q: 2,
    r: 2,
    s: 2,
    t: 2,
    u: 1,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    " ": 0,
  };

  let result = "";
  for (let char of input) {
    if (kamus[char] !== undefined) {
      result += kamus[char];
    }
  }
  return result;
}

module.exports = convertToNumber;