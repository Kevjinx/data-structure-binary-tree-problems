
// Implement a class that takes a value

const { preOrderArray } = require("./02-tree-order");

// and constructs a valid binary tree node
class TreeNode {
    // Your code here
  constructor(val) {
    this.val = val;
    this.left = null
    this.right = null
  }

  // preOrderArray(root) {
  //   if (!root.left && !root.right) {
  //     return root
  //   } else {
  //     if (root.val <= this.left.val) {
  //       return this.preOrderArray(root.left)
  //     } else {
  //       return this.preOrderArray(root.right)
  //     }
  //   }
  // }


//if have left,
//  go left
//else if have right
// go right
//else return root


  postOrderArray(node) {
    if (!node) return []
    if (!node.left && !node.right) return node;
    if (node.left) return preOrderArray(node.left)
    if (node.right) return preOrderArray(node.right)
  }


  inOrderArray() {

  }

  postOrderArray() {

  }


}

module.exports = {
    TreeNode
};
