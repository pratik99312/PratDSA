// Write a program to Add Two Numbers represented by linked lists. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while(l1 || l2 || carry){
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;

        let newNode= new ListNode(digit)
        ans.next = newNode;
        ans = ans.next;

        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }

    return ansHead.next


};


 const list1 = new ListNode(2);
 list1.next = new ListNode(4);
 list1.next.next = new ListNode(3);

 const list2 = new ListNode(5);
 list2.next = new ListNode(6);
 list2.next.next = new ListNode(4);

 console.log(addTwoNumbers(list1, list2));

// Time complexity: O(max(m,n)) where m and n are the lengths of the two linked lists. We need to traverse both linked lists once to add the numbers.
// Space complexity: O(max(m,n)) for the output linked list. In the worst case, the sum of the two numbers can have one more digit than the longer of the two input numbers, which would require an additional node in the output linked list.  

// Note: The above code assumes that the input linked lists are non-empty and contain non-negative integers. If the input linked lists can be empty or contain negative integers, additional checks and handling would be needed.

// Dry run
// l1 = 2 -> 4 -> 3
// l2 = 5 -> 6 -> 4

// ans = 0 -> null
// carry = 0

// val1 = 2, val2 = 5, sum = 7, carry = 0, digit = 7
// ans = 0 -> 7 -> null

// val1 = 4, val2 = 6, sum = 10, carry = 1, digit = 0
// ans = 0 -> 7 -> 0 -> null

// val1 = 3, val2 = 4, sum = 8 (3 + 4 + carry), carry = 0, digit = 8
// ans = 0 -> 7 -> 0 -> 8 -> null

// return ansHead.next => 7 -> 0 -> 8 -> null       

// The output linked list represents the number 807, which is the sum of 342 (represented by l1) and 465 (represented by l2).   
// The digits are stored in reverse order, so the output linked list is also in reverse order.
// The final output is 7 -> 0 -> 8, which represents the number 807 in reverse order.


