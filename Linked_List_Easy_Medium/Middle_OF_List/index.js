// write a middle of the linked list implementation in JavaScript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast != null && fast.next!=null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow;
};

// dry run
// 1 -> 2 -> 3 -> 4 -> 5
// slow = 1, fast = 1
// slow = 2, fast = 3
// slow = 3, fast = 5
// return slow (3)

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// slow = 1, fast = 1
// slow = 2, fast = 3
// slow = 3, fast = 5
// slow = 4, fast = null
// return slow (4)                  




