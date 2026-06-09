// Write a has cycle in a linked list. Return true if there is a cycle in the linked list. Otherwise, return false.

// Definition for singly-linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let seenNodes = new Set();
    let curr = head;
    while(curr != null){
        if(seenNodes.has(curr)){
            return true;
        }
        seenNodes.add(curr)
        curr = curr.next
    }
    return false;
};


// dry run
// head = [3,2,0,-4], pos = 1

// seenNodes = {}
// curr = 3
// seenNodes = {3}
// curr = 2
// seenNodes = {3, 2}
// curr = 0
// seenNodes = {3, 2, 0}
// curr = -4
// seenNodes = {3, 2, 0, -4}
// curr = 2
// seenNodes has 2, return true     

// Time complexity: O(n) where n is the number of nodes in the linked list
// Space complexity: O(n) where n is the number of nodes in the linked list, in the worst case when there is no cycle and we have to store all nodes in the set.    