// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if(min && min > node.data){
    return false;
  }
  
  if(max && max < node.data){
    return false;
  }

  if(node.left) {
    return validate(node.left, min, node.data);
  }
  
  if(node.right) {
    return validate(node.right, this.data, max);
  }

  return true;
}

module.exports = validate;
