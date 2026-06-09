// Write a program to see if there is a cycle in a linked list. Return true if there is a cycle in the linked list. Otherwise, return false.

// Definition for singly-linked list.

var hasCycle = function (head) {
  if (head === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

const node = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null,
      },
    },
  },
};

node.next.next.next.next = node.next; // create a cycle

console.log(hasCycle(node)); // Output: true    

// another test case without cycle
const node2 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

console.log(hasCycle(node2)); // Output: false  

// dry run
// head = [3,2,0,-4], pos = 1

// slow = 3
// fast = 2
// slow != fast, continue
// slow = 2
// fast = -4
// slow != fast, continue
// slow = 0
// fast = 2
// slow != fast, continue
// slow = -4
// fast = -4
// slow == fast, return true

// Time complexity: O(n) where n is the number of nodes in the linked list, in the worst case when there is no cycle and we have to traverse all nodes.
// Space complexity: O(1) because we are using only a constant amount of space for the two pointers.
