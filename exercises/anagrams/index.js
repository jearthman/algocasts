// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB){

  cleanStringA = processString(stringA);
  cleanStringB = processString(stringB);

  return cleanStringA === cleanStringB;
}

// function anagrams(stringA, stringB) {
//   const lowerStringA = processString(stringA);
//   const lowerStringB = processString(stringB);

//   if(lowerStringA.length === lowerStringB.length){
//     let charMapA = charMap(lowerStringA);
//     let charMapB = charMap(lowerStringB);

//     for(let char in charMapA){
//       if(charMapA[char] !== charMapB[char]){
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }

//   return true;
// }

function processString(string){
  return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

// function charMap(string){
//   const chars = {};
//   for(let char of string){
//     if(!chars[char]){
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }

//   return chars;
// }

module.exports = anagrams;
