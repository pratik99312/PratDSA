// Write a program to remove all elements from a linked list of integers that have value val. Return the new head of the list.

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next
        }
    }
    return sentinel.next
};


const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};

console.log(removeElements(node, 6)); // Output: [1,2,3,4,5]                                                


// dry run
// head = [1,2,6,3,4,5,6], val = 6

// sentinel = [0,1,2,6,3,4,5,6]
// prev = 0

// prev.next.val == 1 != 6
// prev = 1

// prev.next.val == 2 != 6
// prev = 2

// prev.next.val == 6 == 6
// prev.next = prev.next.next => [0,1,2,3,4,5,6]

// prev.next.val == 3 != 6
// prev = 3

// prev.next.val == 4 != 6
// prev = 4

// prev.next.val == 5 != 6
// prev = 5

// prev.next.val == 6 == 6
// prev.next = prev.next.next => [0,1,2,3,4,5]

// return sentinel.next => [1,2,3,4,5]

// another test case with all elements to be removed
const node2 = {
  val: 7,
  next: {
    val: 7,
    next: {
      val: 7,
      next: null,
    },
  },
};

console.log(removeElements(node2, 7)); // Output: null      

// dry run
// head = [7,7,7], val = 7

// sentinel = [0,7,7,7]
// prev = 0

// prev.next.val == 7 == 7
// prev.next = prev.next.next => [0,7,7]

// prev.next.val == 7 == 7
// prev.next = prev.next.next => [0,7]

// prev.next.val == 7 == 7
// prev.next = prev.next.next => [0]

// return sentinel.next => null 

// another test case with no elements to be removed
const node3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

console.log(removeElements(node3, 4)); // Output: [1,2,3]       



//dry run
// head = [1,2,3], val = 4

// sentinel = [0,1,2,3]
// prev = 0

// prev.next.val == 1 != 4
// prev = 1

// prev.next.val == 2 != 4
// prev = 2

// prev.next.val == 3 != 4
// prev = 3

// return sentinel.next => [1,2,3]          

// Time complexity: O(n) where n is the number of nodes in the linked list, because we traverse the linked list once. The space complexity is O(1) because we only use a constant amount of extra space for the sentinel node and the prev pointer. 

