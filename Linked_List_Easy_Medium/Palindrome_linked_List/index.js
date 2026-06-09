// Write a program to check if a linked list is a palindrome. Return true if it is a palindrome. Otherwise, return false.

// Definition for singly-linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // finding the middle element 
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // reverse the second half
   let prev = null ;
   let curr = slow;
   while(curr){
    let temp = curr.next;
    curr.next = prev
    prev = curr;
    curr = temp;
   }


    // Checking for palindrome
    let firstList = head
    let secondList = prev
    while(secondList){
    if(firstList.val != secondList.val){
        return false;
    }
    firstList = firstList.next
    secondList = secondList.next

    }
  return true;

};

const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};

console.log(isPalindrome(node)); // Output: true

// another test case
const node2 = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

console.log(isPalindrome(node2)); // Output: false                                                                                          

// dry run
// head = [1,2,2,1]

// slow = 1
// fast = 1
// slow != fast, continue
// slow = 2
// fast = 2
// slow != fast, continue
// slow = 2
// fast = null
// slow == fast, stop

// reverse the second half of the list starting from slow (which is at the second 2)
// prev = null
// curr = 2
// temp = 1
// curr.next = null
// prev = 2
// curr = 1

// temp = null
// curr.next = 2
// prev = 1
// curr = null

// firstList = 1
// secondList = 1
// firstList.val == secondList.val, continue
// firstList = 2
// secondList = 2
// firstList.val == secondList.val, continue
// firstList = 2
// secondList = null
// secondList is null, stop and return true                         

// Time complexity: O(n) where n is the number of nodes in the linked list, because we traverse the linked list at most three times (finding the middle, reversing the second half, and comparing the two halves).              

// Space complexity: O(1) because we are reversing the linked list in place and not using any additional data structures that grow with the input size.                 


// Note: The above code modifies the original linked list by reversing the second half. If you want to restore the original linked list after checking for palindrome, you can reverse the second half again and attach it back to the first half.

// To restore the original linked list, you can add the following code after the palindrome check:

// // Restore the original linked list
// let prev2 = null;
// let curr2 = prev; // prev is the head of the reversed second half
// while(curr2){
//     let temp2 = curr2.next;
//     curr2.next = prev2;
//     prev2 = curr2;
//     curr2 = temp2;
// }

// // Attach the restored second half back to the first half
// if (slow) {
//     slow.next = prev2;
// }        



// Time complexity for restoring the original linked list: O(n) because we traverse the second half of the linked list once to reverse it back and attach it to the first half.

// Space complexity for restoring the original linked list: O(1) because we are reversing the linked list in place and not using any additional data structures that grow with the input size.  

// Overall time complexity: O(n) because we traverse the linked list at most four times (finding the middle, reversing the second half, comparing the two halves, and restoring the original linked list).

// Overall space complexity: O(1) because we are using only a constant amount of space for the pointers and not using any additional data structures that grow with the input size.             

// Note: The above code assumes that the input linked list is well-formed and does not contain any cycles. If the linked list can contain cycles, you may want to add a check for cycles before proceeding with the palindrome check to avoid infinite loops.
