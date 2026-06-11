// Write a function that takes head  odd even sorted linked list and rearranges the nodes such that all odd indexed nodes are together followed by the even indexed nodes. The function should return the head of the modified linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
};

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(oddEvenList(list));

// dry run
// odd = 1 -> 2 -> 3 -> 4 -> 5
// even = 2 -> 3 -> 4 -> 5
// evenStart = 2 -> 3 -> 4 -> 5

// odd.next = odd.next.next => odd.next = 3 => odd = 1 -> 3 -> 4 -> 5
// even.next = even.next.next => even.next = 4 => even = 2 -> 4 -> 5

// odd.next = odd.next.next => odd.next = 5 => odd = 1 -> 3 -> 5
// even.next = even.next.next => even.next = null => even = 2 -> null

// odd.next = evenStart => odd.next = 2 => odd = 1 -> 3 -> 5 -> 2 -> null

// return head => 1 -> 3 -> 5 -> 2 -> null

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) since we are modifying the linked list in place and not using any additional data structures

// Note: The above code assumes that the input linked list is 1-indexed, meaning the first node is considered odd indexed and the second node is considered even indexed. If the input linked list is 0-indexed, you can simply swap the roles of odd and even pointers in the code.
