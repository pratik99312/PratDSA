// Write a program to merge two sorted lists into a single sorted array.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1

    let curr = null

    if(l1.val < l2.val){
        curr = l1;
        l1 = l1.next
    }else{
        curr = l2;
        l2 = l2.next
    }

    let start = curr;

    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(!l1){
        curr.next = l2
    }else{
        curr.next = l1
    }

    return start
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

console.log(
  JSON.stringify(mergeTwoLists(list1, list2), null, 2)
);            

// dry run
// l1 = 1 -> 2 -> 4
// l2 = 1 -> 3 -> 4

// curr = null
// start = null

// First iteration:
// l1.val (1) < l2.val (1) is false, so curr = l2 (1), l2 = l2.next (3)
// start = curr (1)

// Second iteration:
// l1.val (1) < l2.val (3) is true, so curr.next = l1 (1), l1 = l1.next (2)
// curr = curr.next (1)

// Third iteration:
// l1.val (2) < l2.val (3) is true, so curr.next = l1 (2), l1 = l1.next (4)
// curr = curr.next (2)

// Fourth iteration:
// l1.val (4) < l2.val (3) is false, so curr.next = l2 (3), l2 = l2.next (4)
// curr = curr.next (3)

// Fifth iteration:
// l1.val (4) < l2.val (4) is false, so curr.next = l2 (4), l2 = l2.next (null)
// curr = curr.next (4)

// Now l2 is null, so we exit the loop and set curr.next = l1 (4)

// The merged list is: 1 -> 1 -> 2 -> 3 -> 4 -> 4                   

// Time Complexity: O(n + m) where n and m are the lengths of the two lists
// Space Complexity: O(1) since we are not using any extra space for the merged list


