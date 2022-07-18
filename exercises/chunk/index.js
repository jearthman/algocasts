// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let index = 0
  let chunks = [];

  while(index < array.length){
    chunks.push(array.slice(index, index + size));
    index += size;
  }

  return chunks;
}

module.exports = chunk;

// function chunk(array, size) {
//   let chunkIterator = 0;
//   let chunkArray = [];
//   let sizeCounter = 0;
//   let subArray = [];

//   for(let num of array) {
//     if(sizeCounter > size - 1){
//       sizeCounter = 0;
//       chunkArray.push(subArray);
//       chunkIterator++;
//       subArray = [];
//     }
//     subArray.push(num);
//     sizeCounter++;
//   }

//   chunkArray.push(subArray);
//   return chunkArray;
// }