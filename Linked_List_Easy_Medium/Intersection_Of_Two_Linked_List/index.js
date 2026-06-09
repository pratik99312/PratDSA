// Write a program intersection of two linked list. Return the node where the intersection of two linked lists begins. If there is no intersection, return null.

// Definition for singly-linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // put all nodes of headB inside the set
   let store = new Set();
   while(headB){
    store.add(headB);
    headB= headB.next
   }
// check each element of headA if are they present in the set
  while(headA){
    if(store.has(headA)){
        return headA
    }
    headA = headA.next
  }
  return null
};

const nodeA = {
  val: 4,
  next: {
    val: 1,
    next: {
      val: 8,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const nodeB = {
  val: 5,
  next: {
    val: 0,
    next: {
      val: 1,
      next: nodeA.next.next, // create an intersection at node with value 8
    },
  },
};

console.log(getIntersectionNode(nodeA, nodeB)); // Output: Node with value 8                                                                                                                        
//dry run
// headA = [4,1,8,4,5], headB = [5,0,1,8,4,5]

// store = {5,0,1,8,4,5}

// headA = 4 -> not in store
// headA = 1 -> not in store
// headA = 8 -> in store, return node with value 8      

// another test case without intersection
const nodeC = {
  val: 2,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

const nodeD = {
  val: 1,
  next: {
    val: 5,
    next: null,
  },
};

console.log(getIntersectionNode(nodeC, nodeD)); // Output: null

// dry run
// headA = [2,6,4], headB = [1,5]

// store = {1,5}

// headA = 2 -> not in store
// headA = 6 -> not in store
// headA = 4 -> not in store
// end of list reached, return null                 

// time complexity: O(n + m) where n and m are the lengths of the two linked lists, because we traverse each linked list once to store the nodes of headB and once to check for intersection with headA. The space complexity is O(m) where m is the length of headB, because we store all nodes of headB in a set. 

