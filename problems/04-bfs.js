// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root) {
  if (!root) return []

  const queue = [root];
  const finalValueArr = []


  while (queue.length) {

    const currentNode = queue.pop();

    if (currentNode.left) queue.unshift(currentNode.left)
    if (currentNode.right) queue.unshift(currentNode.right)

    finalValueArr.push(currentNode.val)

  }
  return finalValueArr;
}



module.exports = { bfs };
