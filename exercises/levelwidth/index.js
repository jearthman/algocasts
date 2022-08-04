// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let split = 7;
  const arr = [root, split];
  const counters = [];
  let counter = 0;
  console.log(arr);

  while(arr.length > 1){
    let node = arr.shift();
    if(node === split){
      counters.push(counter);
      counter = 0;
      arr.push(split);
    } else {
      counter++;
      arr.push(...node.children);
      
    }
    console.log(arr);
    console.log(counters);
  }
  counters.push(counter);

  return counters;
}

module.exports = levelWidth;
