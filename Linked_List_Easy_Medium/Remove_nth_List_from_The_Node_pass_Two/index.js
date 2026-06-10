// Remove Nth Node from the End of a Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;

  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinel.next;
};

 const list = new ListNode(1);
 list.next = new ListNode(2);
 list.next.next = new ListNode(3);
 list.next.next.next = new ListNode(4);
 list.next.next.next.next = new ListNode(5);

 console.log(removeNthFromEnd(list, 2));        


 // dry run
// sentinel -> 1 -> 2 -> 3 -> 4 -> 5
// length = 5
// prevPos = 5 - 2 = 3
// prev = sentinel

// for loop iteration:
// i = 0: prev = sentinel.next (1)
// i = 1: prev = prev.next (2)
// i = 2: prev = prev.next (3)

// After the loop, prev is at node with value 3
// prev.next is node with value 4, which is the node to be removed

// Update the next pointer of prev to skip the node to be removed
// prev.next = prev.next.next (prev.next now points to node with value 5)

// Final linked list after removal:
// sentinel -> 1 -> 2 -> 3 -> 5

// Return sentinel.next, which is the head of the modified linked list                                                  



