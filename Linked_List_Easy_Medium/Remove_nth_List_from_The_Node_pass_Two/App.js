// Write a function that takes in the head of a linked list and an integer n,
// and removes the nth node from the end of the list.
// The function should return the head of the modified linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Add sentinel (dummy) node
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let first = sentinel;
  let second = sentinel;

  // Move first pointer n + 1 steps ahead
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers together
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Delete the target node
  second.next = second.next.next;

  return sentinel.next;
};

// Helper function to print linked list
function printList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(" -> "));
}

// Create linked list:
// 1 -> 2 -> 3 -> 4 -> 5

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

// Remove 2nd node from end (node 4)
const result = removeNthFromEnd(list, 2);

printList(result);

// Dry run:
// Sentinel -> 1 -> 2 -> 3 -> 4 -> 5
// first and second both start at sentinel

// Move first pointer n + 1 steps ahead:
// i = 0: first = first.next (1)
// i = 1: first = first.next (2)
// i = 2: first = first.next (3)

// Now, first is at node with value 3

// Move both pointers together until first reaches the end:
// first moves to 4, second moves to 1
// first moves to 5, second moves to 2
// first moves to null, second moves to 3

// Now, second is at node with value 3, which is the node before the target node (4)

// Update the next pointer of second to skip the target node:
// second.next = second.next.next (second.next now points to node with value 5)

// The modified linked list is now:
// Sentinel -> 1 -> 2 -> 3 -> 5

// Return sentinel.next, which is the head of the modified linked list (1)

// Final output: 1 -> 2 -> 3 -> 5

// Time complexity: O(L), where L is the length of the linked list
// Space complexity: O(1)

// This implementation uses the two-pointer technique to efficiently remove the nth node from the end of the linked list in a single pass.
