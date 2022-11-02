const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let currentNode = rootNode;

  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val
}

function findMaxBST (rootNode) {
  // Your code here
  let currentNode = rootNode;

  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  let minVal = Infinity;

  const queue = [];
  queue.push(rootNode)

  while (queue.length > 0) {
    let node = queue.pop();
    if (node.val < minVal) minVal = node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return minVal;
}

function findMaxBT (rootNode) {
  // Your code here
  let maxVal = -Infinity;

  const queue = [];
  queue.push(rootNode)

  while (queue.length > 0) {
    let node = queue.pop();
    if (node.val > maxVal) maxVal = node.val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return maxVal;
}


function getHeight (rootNode, mod = 0) {
  if (!rootNode) return -1;
  let height = mod;
  const queue = [[rootNode, mod]];

  while (queue.length > 0) {
    let node = queue.pop();

    if (node[1] > height) height = node[1];

    if (node[0].left) {
      queue.push([node[0].left, node[1] + 1]);
    }
    if (node[0].right) {
      queue.push([node[0].right, node[1] + 1]);
    }
  }
  return height;
}

function balancedTree (rootNode) {
  if (!rootNode) return -1;
  // console.log('curr node', rootNode);
  // recursively check each left and right
  let heightl = getHeight(rootNode.left, 1);
  let heightr = getHeight(rootNode.right, 1);
  if (heightl === -1) heightl = 0;
  if (heightr === -1) heightr = 0;
  // console.log('hl: ',heightl, 'hr', heightr);
  let res = Math.abs(heightl - heightr) <= 1;
  // console.log(res);
  if (!balancedTree(rootNode.left)) res = false;
  if (!balancedTree(rootNode.right)) res = false;
  return res;

}

// console.log(heightl, heightr);
// console.log(Math.abs(heightl - heightr))
// console.log( Math.abs(heightl - heightr) <= 1)

    // true
    //      3
    //    /   \
    //   2     5
    //  /    /  \
    // 1    4    7
    //          /
    //         6

function countNodes (rootNode) {
  let counter = 0;

  const queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    let node = queue.pop();
    counter++;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return counter;
}

function getParentNode (rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null
  const queue = [rootNode];
  

  while (queue.length > 0) {
    let node = queue.pop();
    
    if (node.left) {
      if (node.left.val === target) return node;
      queue.push(node.left);
    }
    if (node.right) {
      if (node.right.val === target) return node;
      queue.push(node.right);
  }
}
return undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let current = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {
    if (current) {stack.push(current);
    current = current.left;
    } else if (!current && stack.length) {
      current = stack.pop();
      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;
    } else break;
  } 
}


  // let arr = [];
  // if (!rootNode) return null;
  // if (rootNode) {
  //   if (rootNode.left) {
  //     if (rootNode.left.val === target) return rootNode;
  //   }
  //   if (rootNode.right) {
  //     if (rootNode.right.val === target) return rootNode;
  //   }
  //   inOrderPredecessor(rootNode.left);
  //   console.log(rootNode.val);
  //   inOrderPredecessor(rootNode.right);
  //   }
  // return null
// inOrderPredecessor(bstRoot, 4)
function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
