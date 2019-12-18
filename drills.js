/**
 * # 3
 * 
 * Imagine you are looking for a book in a library with a Dewey Decimal index. 
 * How would you go about it? Can you express this process as a search algorithm? 
 * Implement your algorithm to find a book whose Dewey and book title is provided.
 * 
 */

 //0 - 999

 //input: 799, "Gone fishin";
 //output: index

 

//  function deweyBookSearch(library, num, title, start, end) {
//     let start = start === undefined ? 0 : start;
//     let end = end === undefined ? library.length : end;

//     if (start > end) {
//         return "Dewey number not found in library"
//     }

//     const index = Math.floor((start + end) / 2);
//     const item = library[index];

//     if (item === num) {
//         return titleSearch(library[index], title);
//     }
//     else if (item < num) {
//         return deweyBookSearch(library, num, title, index + 1, end);
//     }
//     else if (item > num) {
//         return deweyBookSearch(library, num, title, start, index -1);
//     }
//  }

//  function titleSearch(subArray, title, start, end) {
//     let start = start === undefined ? 0 : start;
//     let end = end === undefined ? subArray.length : end;

//     if (start > end) {
//         return "Title not found"
//     }

//     const index = Math.floor((start + end) / 2);
//     const item = subArray[index];

//     if (item === title) {
//         return `Book found at ${index}!`;
//     }
//     else if (item < num) {
//         return titleSearch(subArray, title, index + 1, end);
//     }
//     else if (item > num) {
//         return deweyBookSearch(subArray, title, start, index -1);
//     }
//  }

 /**
  * # 4
  * 
  * 
1) Given a binary search tree whose in-order and pre-order 
traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 
35 25 15 14 19 27 89 79 91 90. What would be its postorder 
traversal?
 answer: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35

2) The post order traversal of a binary search tree 
is 5 7 6 9 11 10 8. What is its pre-order traversal?
 answer: 8, 6, 5, 7, 10, 9, 11
  * 
  */

 class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    insert(key, value) {
      if (this.key === null) {
        this.key = key;
        this.value = value;
      }
      else if (key < this.key) {
          
        if (this.left === null) {
          this.left = new BinarySearchTree(key, value, this);
        }
          
        else {
          this.left.insert(key, value);
        }
      }
      
      else {
        if (this.right === null) {
          this.right = new BinarySearchTree(key, value, this);
        }
        else {
          this.right.insert(key, value);
        }
      }
    }
  
    _replaceWith(node) {
      if (this.parent) {
        if (this === this.parent.left) {
          this.parent.left = node;
        }
        else if (this === this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      }
      else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        }
        else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
  
  }

  function binaryTreeTest() {

  let Tree = new BinarySearchTree();

  Tree.insert(35, null)
  Tree.insert(25, null)
  Tree.insert(15, null)
  Tree.insert(14, null)
  Tree.insert(19, null)
  Tree.insert(27, null)
  Tree.insert(89, null)
  Tree.insert(79, null)
  Tree.insert(91, null)
  Tree.insert(90, null)

  return postOrder(Tree);
  }

  function postOrder(tree) {
      if (tree.left) {
          postOrder(tree.left)
      }
      if (tree.right) {
          postOrder(tree.right)
      }
      console.log(tree.key);
  }

  console.log(binaryTreeTest());
  



