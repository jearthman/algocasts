// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for(let char of str){
    if(!chars[char]){
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  let mostHits = 0;
  let mostHitsChar = "";
  for(let char in chars){
    if(mostHits < chars[char]){
      mostHits = chars[char];
      mostHitsChar = char;
    }
  }

  return mostHitsChar;
}

module.exports = maxChar;
