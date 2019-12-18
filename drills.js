const Queue = require('./Queue');

/**
 * # 3
 * 
 * Imagine you are looking for a book in a library with a Dewey Decimal index. 
 * How would you go about it? Can you express this process as a search algorithm? 
 * Implement your algorithm to find a book whose Dewey and book title is provided.
 * 
 */

//0 - 999

//input: 005.2762, "JavaScript: The Good Parts";
//output: index

const library = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ];

 function deweyBookSearch(library, num, title, start = 0, end = library.length) {

    if (start > end) {
        return "Dewey number not found in library"
    }

    const index = Math.floor((start + end) / 2);
    const item = library[index];

    if (parseFloat(item.dewey) === parseFloat(num)) {
        let i = index;
        while (library[i].dewey === num) {
            if (library[i].title === title) {
                return `Book found at index ${i}`
            }
            i++
        }
      return 'Title not found!'
    }
    else if (parseFloat(item.dewey) <  parseFloat(num)) {
        return deweyBookSearch(library, num, title, index + 1, end);
    }
    else if (parseFloat(item.dewey) >  parseFloat(num)) {
        return deweyBookSearch(library, num, title, start, index -1);
    }
 }

 function findTitle(index, num, title, library) {
    let i = index;
    while (library[i].dewey === num) {
        if (library[i].title === title) {
            return `Book found at index ${i}`
        }
        i++
    }
    return 'Title not found!'
    
 }

//  console.log(deweyBookSearch(library, '005.2762', 'JavaScript: The Definitive Guid'))

 

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
  constructor(key = null, value = null, parent = null) {
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

// function postOrder(tree) {
//   if (tree.left) {
//     postOrder(tree.left)
//   }
//   if (tree.right) {
//     postOrder(tree.right)
//   }
//   console.log(tree.key);
// }

//  console.log(binaryTreeTest());

// 5. Implement tree traversals

const tree5 = new BinarySearchTree();
tree5.insert(25, null);
tree5.insert(15, null);
tree5.insert(50, null);
tree5.insert(10, null);
tree5.insert(24, null);
tree5.insert(35, null);
tree5.insert(70, null);
tree5.insert(4, null);
tree5.insert(12, null);
tree5.insert(18, null);
tree5.insert(31, null);
tree5.insert(44, null);
tree5.insert(66, null);
tree5.insert(90, null);
tree5.insert(22, null);

function inOrder(tree) {
  if (tree.left) {
    inOrder(tree.left)
  }
  console.log(tree.key);
  if (tree.right) {
    inOrder(tree.right)
  }
}

function preOrder(tree) {
  console.log(tree.key);
  if (tree.left) {
    preOrder(tree.left)
  }
  if (tree.right) {
    preOrder(tree.right)
  }
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

// postOrder(tree5);

// 6. Find the next commanding officer

// const command = new BinarySearchTree();
// command.insert(5, 'Cpt Picard');
// command.insert(6, 'Cmdr Data');
// command.insert(3, 'Cmdr Riker');
// command.insert(2, 'Lt Cmdr Worf');
// command.insert(4, 'Lt Cmdr LaForge');
// command.insert(8, 'Lt Cmdr Crusher');
// command.insert(1, 'Lt Security-Officer');
// command.insert(7, 'Lt Selar');

function listOfficers(tree, result = []) {
  const queue = new Queue();
  const node = tree;
  console.log(node);
  queue.enqueue(node);
  console.log(queue);

  while(queue.first) {
    const node = queue.dequeue();
    result.push(node.value);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return result;
}

//console.log(listOfficers(command));

// #7 Max Profit

//input:  [128, 97, 121, 123, 98, 97, 105]
//output: profit (difference between two nums)


function maxProfit(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         let diff = arr[j] - arr[i];
         if (diff > 0 && diff > max) {
             max = diff
         } 
      }
  }
  return max;
}

//console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))


// *8 Egg Drop

function eggDrop() {
  let f = 1;
  while (f*(f + 1) / 2 < 100) {
    f++;
  }
  let floor = f;
  let count = 0;

  while (floor <= 100) {
    console.log(`Drop ${count + 1} at floor ${floor}`);
    count++;
    floor += f - count
  }
  if (floor > 100) console.log(`Drop ${count + 1} at floor 100`);
}

eggDrop();