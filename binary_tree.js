// class Nodde {
//     constructor(value) {
//         this.leftChild = null;
//         this.value = value;
//         this.rightChild = null;
//     }

//     insert(rootNode) {
//         if (this.value < rootNode.value) {
//             if (!rootNode.leftChild) {
//                 rootNode.leftChild = this;
//             } else {
//                 this.insert(rootNode.leftChild);
//             }
//         } else {
//             if (!rootNode.rightChild) {
//                 rootNode.rightChild = this;
//             } else {
//                 this.insert(rootNode.rightChild);
//             }
//         }
//     }

//     static search(rootNode, value) {
//         return Nodde.traverseTree(rootNode, value);
//     }

//     static traverseTree(rootNode, value) {
//         if (!rootNode) {
//             throw new Error("Tree does not exists in memory");
//         }

//         if (rootNode.value === value) {
//             return true;
//         }

//         if (value < rootNode.value) {
//             if (!rootNode.leftChild) {
//                 return false;
//             } else {
//                 return Nodde.traverseTree(rootNode.leftChild, value);
//             }
//         } else {
//             if (!rootNode.rightChild) {
//                 return false;
//             } else {
//                 return Nodde.traverseTree(rootNode.rightChild, value);
//             }
//         }
//     }
// }

// const rootNode = new Nodde(10);
// const node1 = new Nodde(5);
// node1.insert(rootNode);
// const node2 = new Nodde(15);
// node2.insert(rootNode);
// const node3 = new Nodde(2);
// node3.insert(rootNode);
// const node4 = new Nodde(7);
// node4.insert(rootNode);
// const node5 = new Nodde(13);
// node5.insert(rootNode);
// const node6 = new Nodde(17);
// node6.insert(rootNode);

// console.log(Nodde.search(rootNode, 11));

// Define the binary tree node
class Node {
  constructor(value) {
    this.leftChild = null;
    this.value = value;
    this.rightChild = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to insert a node recursively
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.leftChild === null) {
        node.leftChild = newNode;
      } else {
        this.insertNode(node.leftChild, newNode);
      }
    } else {
      if (node.rightChild === null) {
        node.rightChild = newNode;
      } else {
        this.insertNode(node.rightChild, newNode);
      }
    }
  }

  // Search for a target value in the binary tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to search for a node recursively
  searchNode(node, value) {
    if (node === null) {
      return false; // Element not found
    }

    if (value === node.value) {
      return true; // Element found
    }

    if (value < node.value) {
      return this.searchNode(node.leftChild, value);
    }

    return this.searchNode(node.rightChild, value);
  }
}

// Usage example
const tree = new BinaryTree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);

console.log(tree.search(6)); // Output: true
console.log(tree.search(12)); // Output: false
