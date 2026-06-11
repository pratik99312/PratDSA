// Write a function that takes in the head of a sorted linked list and removes all duplicates from the list. The function should return the head of the modified linked list.

// Definition for singly-linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

const list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(list));

// dry run
// curr = 1 -> 1 -> 2 -> 3 -> 3
// curr.val == curr.next.val => 1 == 1 => true
// curr.next = curr.next.next => curr.next = 2
// list = 1 -> 2 -> 3 -> 3

// curr = 1 -> 2 -> 3 -> 3
// curr.val == curr.next.val => 1 == 2 => false
// curr = curr.next => curr = 2

// curr = 2 -> 3 -> 3
// curr.val == curr.next.val => 2 == 3 => false
// curr = curr.next => curr = 3

// curr = 3 -> 3
// curr.val == curr.next.val => 3 == 3 => true
// curr.next = curr.next.next => curr.next = null
// list = 1 -> 2 -> 3 -> null

// curr = 3 -> null
// curr.next is null => exit loop

// return head => 1 -> 2 -> 3 -> null

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(1) since we are modifying the linked list in place and not using any additional data structures
