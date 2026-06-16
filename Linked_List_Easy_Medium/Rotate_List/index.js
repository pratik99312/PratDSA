// Write a Program to rotate list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head

    // calculate length
    let length = 0;
    let curr = head
    while(curr){
        curr = curr.next;
        length++
    }

// to avoid unecessary rotation
    k = k % length;
    let s = head
    let f = head
// move f pointer to k steps
    for(let i = 0; i < k;i++){
        f=f.next;
    }

// Reaching the end of the list
    while(f.next){
        s= s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;

    return newHead;


};