// write a program to reverse a linked list in JavaScript

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
var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr != null){
        let temp = curr.next
        curr.next = prev
        prev = curr;
        curr = temp
    }
    head = prev
    return head;
};

// dry run
// 1 -> 2 -> 3 -> 4 -> 5
// prev = null, curr = 1
// temp = 2, curr.next = null, prev = 1, curr = 2
// temp = 3, curr.next = 1, prev = 2, curr = 3
// temp = 4, curr.next = 2, prev = 3, curr = 4
// temp = 5, curr.next = 3, prev = 4, curr = 5
// temp = null, curr.next = 4, prev = 5, curr = null
// head = prev (5) return head (5)                          