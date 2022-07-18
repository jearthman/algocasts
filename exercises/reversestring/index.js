// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var reverse = "";
  for(let char of str){
    reverse = char + reverse;
  }
  return reverse;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }