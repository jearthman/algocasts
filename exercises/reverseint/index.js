// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = Math.sign(n);
  let numberString = n.toString();
  let numberStringRev = numberString.split('').reverse().join('');
  return sign * parseInt(numberStringRev);
}

module.exports = reverseInt;
