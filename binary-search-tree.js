// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      // Your code here
      let newNode = new TreeNode(val);
      if (!currentNode) {
        this.root = newNode;
        return this;
      }
  
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else{
          return this.insert(val, currentNode.left)
        }
      }
  
      if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else{
          return this.insert(val, currentNode.right)
        }
      }
    }
        
    
  
    search(val) {
      // Your code here
      if (!this.root) return false;
      let currentNode = this.root;
      
      while (currentNode) {
        if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          currentNode = currentNode.right;
        } else {
          return true;
        }
      }
      return false;
    }

    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if(!currentNode) return this;
      if (currentNode) {
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right)
      }
      return;
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return this
      if (currentNode) {
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
      }
      return;
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return this;
      if (currentNode) {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val)
      }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      const queue = [];
      queue.push(this.root)
  
      while (queue.length > 0) {
        let node = queue.shift();
        console.log(node.val);
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      const queue = [];
      queue.push(this.root)
  
      while (queue.length > 0) {
        let node = queue.pop();
        console.log(node.val);
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };