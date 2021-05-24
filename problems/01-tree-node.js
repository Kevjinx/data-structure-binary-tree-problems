
// Implement a class that takes a value
// and constructs a valid binary tree node
class TreeNode {
    // Your code here
  constructor(val) {
    this.val = val;
    this.left = null
    this.right = null
  }

  preOrderArray(root) {
    if (!root.left && !root.right) {
      return root
    } else {
      if (root.val <= this.left.val) {
        return this.preOrderArray(root.left)
      } else {
        return this.preOrderArray(root.right)
      }
    }
  }


  inOrderArray() {

  }

  postOrderArray() {

  }


}

module.exports = {
    TreeNode
};
