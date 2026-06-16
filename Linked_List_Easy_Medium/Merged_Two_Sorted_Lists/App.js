// Write a Program to merge two sorted lists

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 **/

var mergeTwoLists = function (l1, l2) {
  let start = new ListNode();
  let curr = start;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l1) {
    curr.next = l2;
  } else {
    curr.next = l1;
  }

  return start.next;
};

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

console.log(JSON.stringify(mergeTwoLists(list1, list2)));

// Dry Run
// list1 = 1 -> 2 -> 4
// list2 = 1 -> 3 -> 4

// start = new ListNode() => start = 0 -> null
// curr = start => curr = 0 -> null

// while(l1 && l2) => while(1 && 1) => true
// if(l1.val < l2.val) => if(1 < 1) => false
// else => curr.next = l2 => curr.next = 1 -> 3 -> 4
// l2 = l2.next => l2 = 3 -> 4
// curr = curr.next => curr = 1 -> 3 -> 4

// while(l1 && l2) => while(1 && 3) => true
// if(l1.val < l2.val) => if(1 < 3) => true
// curr.next = l1 => curr.next = 1 -> 2 -> 4
// l1 = l1.next => l1 = 2 -> 4
// curr = curr.next => curr = 1 -> 2 -> 4

// while(l1 && l2) => while(2 && 3) => true
// if(l1.val < l2.val) => if(2 < 3) => true
// curr.next = l1 => curr.next = 2 -> 4
// l1 = l1.next => l1 = 4
// curr = curr.next => curr = 2 -> 4

// while(l1 && l2) => while(4 && 3) => true
// if(l1.val < l2.val) => if(4 < 3) => false
// else => curr.next = l2 => curr.next = 3 -> 4
// l2 = l2.next => l2 = 4
// curr = curr.next => curr = 3 -> 4

// while(l1 && l2) => while(4 && 4) => true
// if(l1.val < l2.val) => if(4 < 4) => false
// else => curr.next = l2 => curr.next = 4
// l2 = l2.next => l2 = null
// curr = curr.next => curr = 4

// while(l1 && l2) => while(4 && null) => false
// if(!l1) => if(!4) => false
// else => curr.next = l1 => curr.next = 4

// return start.next => return 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Time Complexity => O(n + m) where n and m are the lengths of the two lists
// Space Complexity => O(1) since we are not using any extra space to store the merged list, we are just rearranging the pointers of the existing nodes.
