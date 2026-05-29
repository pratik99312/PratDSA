# 🔗 Linked List — JavaScript DSA

A complete guide to Linked Lists in JavaScript, covering core concepts, implementations, operations, and common interview problems.

---

## 📖 Table of Contents

- [What is a Linked List?](#what-is-a-linked-list)
- [Types of Linked Lists](#types-of-linked-lists)
- [Node Structure](#node-structure)
- [Singly Linked List Implementation](#singly-linked-list-implementation)
- [Doubly Linked List Implementation](#doubly-linked-list-implementation)
- [Core Operations](#core-operations)
  - [Insertion](#insertion)
  - [Deletion](#deletion)
  - [Traversal](#traversal)
  - [Search](#search)
- [Common Interview Problems](#common-interview-problems)
- [Time & Space Complexity](#time--space-complexity)
- [Linked List vs Array](#linked-list-vs-array)
- [When to Use a Linked List](#when-to-use-a-linked-list)

---

## What is a Linked List?

A **Linked List** is a linear data structure in which elements (called **nodes**) are stored in sequence, but unlike arrays, they are **not stored in contiguous memory locations**.

Each node contains:
- **Data** — the value stored in the node
- **Next** — a pointer/reference to the next node in the sequence

```
[Head] → [10 | •—] → [20 | •—] → [30 | null]
```

---

## Types of Linked Lists

| Type | Description |
|------|-------------|
| **Singly Linked List** | Each node points only to the next node |
| **Doubly Linked List** | Each node points to both next and previous nodes |
| **Circular Linked List** | The last node points back to the head |
| **Circular Doubly Linked List** | Combines circular and doubly linked list |

---

## Node Structure

### Singly Node

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

### Doubly Node

```js
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
```

---

## Singly Linked List Implementation

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at a given index
  insertAt(data, index) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) return this.prepend(data);

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  // Delete by value
  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Search for a value
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Print the list
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}
```

### Example Usage

```js
const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(15, 2);

list.print();
// Output: 5 → 10 → 15 → 20 → 30

console.log(list.search(20)); // Output: 3
console.log(list.search(99)); // Output: -1

list.delete(15);
list.print();
// Output: 5 → 10 → 20 → 30
```

---

## Doubly Linked List Implementation

```js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  delete(data) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;

        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printForward() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log("Forward:", result.join(" ⇄ "));
  }

  printBackward() {
    let result = [];
    let current = this.tail;
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    console.log("Backward:", result.join(" ⇄ "));
  }
}
```

### Example Usage

```js
const dll = new DoublyLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);
dll.prepend(0);

dll.printForward();
// Output: Forward: 0 ⇄ 1 ⇄ 2 ⇄ 3

dll.printBackward();
// Output: Backward: 3 ⇄ 2 ⇄ 1 ⇄ 0
```

---

## Core Operations

### Insertion

```js
// At Beginning — O(1)
prepend(data) {
  const node = new Node(data);
  node.next = this.head;
  this.head = node;
}

// At End — O(n)
append(data) {
  // traverse to last node, then attach
}

// At Index — O(n)
insertAt(data, index) {
  // traverse to index - 1, then insert
}
```

### Deletion

```js
// Delete head — O(1)
deleteHead() {
  if (!this.head) return;
  this.head = this.head.next;
}

// Delete by value — O(n)
delete(data) {
  // find node and bypass it
}
```

### Traversal

```js
// Iterative
function traverse(head) {
  let current = head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

// Recursive
function traverseRecursive(node) {
  if (!node) return;
  console.log(node.data);
  traverseRecursive(node.next);
}
```

### Search

```js
function search(head, target) {
  let current = head;
  let index = 0;
  while (current) {
    if (current.data === target) return index;
    current = current.next;
    index++;
  }
  return -1;
}
```

---

## Common Interview Problems

### 1. Reverse a Linked List

```js
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev; // new head
}

// Example:
// Input:  1 → 2 → 3 → 4 → 5
// Output: 5 → 4 → 3 → 2 → 1
```

---

### 2. Detect a Cycle (Floyd's Algorithm)

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // cycle detected
  }

  return false;
}
```

---

### 3. Find the Middle Node

```js
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // middle node
}

// Example:
// List: 1 → 2 → 3 → 4 → 5
// Middle: 3
```

---

### 4. Merge Two Sorted Linked Lists

```js
function mergeSortedLists(l1, l2) {
  let dummy = new Node(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.data <= l2.data) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

// Input:  1 → 3 → 5  and  2 → 4 → 6
// Output: 1 → 2 → 3 → 4 → 5 → 6
```

---

### 5. Remove Nth Node From End

```js
function removeNthFromEnd(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}

// Input: 1 → 2 → 3 → 4 → 5, n = 2
// Output: 1 → 2 → 3 → 5
```

---

### 6. Check if Linked List is Palindrome

```js
function isPalindrome(head) {
  let values = [];
  let current = head;

  while (current) {
    values.push(current.data);
    current = current.next;
  }

  let left = 0, right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Example:
// Input: 1 → 2 → 3 → 2 → 1  → true
// Input: 1 → 2 → 3           → false
```

---

## Time & Space Complexity

| Operation | Singly LL | Doubly LL | Array |
|-----------|-----------|-----------|-------|
| Access by index | O(n) | O(n) | O(1) |
| Search | O(n) | O(n) | O(n) |
| Insert at head | O(1) | O(1) | O(n) |
| Insert at tail | O(n) | O(1)* | O(1) amortized |
| Insert at index | O(n) | O(n) | O(n) |
| Delete at head | O(1) | O(1) | O(n) |
| Delete at tail | O(n) | O(1)* | O(1) |
| Delete at index | O(n) | O(n) | O(n) |

> *O(1) when tail pointer is maintained.

---

## Linked List vs Array

| Feature | Linked List | Array |
|---------|-------------|-------|
| Memory allocation | Dynamic | Static / contiguous |
| Access time | O(n) | O(1) |
| Insert/Delete at start | O(1) | O(n) |
| Insert/Delete at end | O(n) / O(1)* | O(1) amortized |
| Memory overhead | Extra (pointers) | None |
| Cache friendliness | Low | High |
| Size flexibility | Dynamic | Fixed (static arrays) |

---

## When to Use a Linked List

✅ **Use a Linked List when:**
- You need frequent insertions/deletions at the beginning or middle
- Memory size is unpredictable and needs to grow dynamically
- You don't need random access to elements
- Implementing stacks, queues, or adjacency lists for graphs

❌ **Avoid a Linked List when:**
- You need fast random access (use arrays/hash maps)
- Memory is constrained (pointers add overhead)
- Cache performance is critical (arrays are more cache-friendly)

---

## 💡 Key Takeaways

- Linked Lists shine for **dynamic insertions and deletions**
- Always handle **edge cases**: empty list, single node, head/tail operations
- **Two-pointer technique** (slow/fast) is essential for cycle detection, finding middle, and more
- Prefer **dummy nodes** in complex operations to simplify edge cases
- **Doubly Linked Lists** allow backward traversal at the cost of extra memory

---

## 📚 Further Reading

- [MDN: JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [LeetCode: Linked List Problems](https://leetcode.com/tag/linked-list/)
- [GeeksForGeeks: Linked List](https://www.geeksforgeeks.org/data-structures/linked-list/)

---

> Made with ❤️ for JavaScript DSA learners

## 📊 Linked List vs Array — Detailed Comparison

### Memory Layout

**Array**
Index:  [0]   [1]   [2]   [3]
Value:  [10]  [20]  [30]  [40]
Memory: 100   104   108   112   ← contiguous addresses

**Linked List**

[10 | 0x200] → [20 | 0x450] → [30 | 0x110] → [40 | null]
0x100           0x200          0x450           0x110    ← scattered addresses


---

### ⚡ Time Complexity

| Operation            | Array         | Linked List       |
|----------------------|---------------|-------------------|
| Access by index      | O(1) ✅       | O(n) ❌           |
| Search (unsorted)    | O(n)          | O(n)              |
| Insert at beginning  | O(n) ❌       | O(1) ✅           |
| Insert at end        | O(1) amortized| O(n) / O(1)*      |
| Insert at middle     | O(n)          | O(n)              |
| Delete at beginning  | O(n) ❌       | O(1) ✅           |
| Delete at end        | O(1)          | O(n) / O(1)*      |
| Delete at middle     | O(n)          | O(n)              |

> *O(1) at end only when a **tail pointer** is maintained in the Linked List.

---

### 🗂️ Space Complexity

| Factor               | Array                        | Linked List                        |
|----------------------|------------------------------|------------------------------------|
| Space per element    | Just the value               | Value + pointer(s)                 |
| Singly LL overhead   | —                            | +1 pointer per node (~8 bytes)     |
| Doubly LL overhead   | —                            | +2 pointers per node (~16 bytes)   |
| Total complexity     | O(n)                         | O(n) but higher constant           |
| Memory allocation    | Contiguous block upfront     | Dynamic, one node at a time        |

---

### 🔍 Key Differences at a Glance

| Feature                  | Array                  | Linked List               |
|--------------------------|------------------------|---------------------------|
| Memory layout            | Contiguous             | Scattered (dynamic)       |
| Size                     | Fixed (static arrays)  | Dynamic                   |
| Random access            | ✅ Yes — O(1)          | ❌ No — O(n)              |
| Cache friendliness       | ✅ High                | ❌ Low                    |
| Insert / Delete at head  | ❌ Slow — O(n)         | ✅ Fast — O(1)            |
| Memory overhead          | ✅ None (just values)  | ❌ Extra (pointers)       |
| Resizing                 | ❌ Costly              | ✅ Easy                   |
| Supports backward travel | ✅ Yes (by index)      | ⚠️ Only in Doubly LL     |

---

### 💡 When to Choose What

**Choose Array when:**
- You need fast random access (`arr[i]`)
- Data size is known and fixed
- Cache performance matters (games, graphics, DSP)
- Doing lots of reads, few writes

**Choose Linked List when:**
- You need frequent inserts/deletes at the head or middle
- Data size is unpredictable and changes often
- Implementing Stacks, Queues, or LRU Cache
- Memory allocation needs to stay flexible

---

### 🧪 Code Example — Insert at Beginning

**Array** — O(n), must shift all elements:
```js
function insertAtBeginning(arr, value) {
  arr.unshift(value); // shifts every element one step right
  return arr;
}

insertAtBeginning([10, 20, 30], 5);
// Output: [5, 10, 20, 30]  ← every element was moved
```

**Linked List** — O(1), just rewire the head pointer:
```js
function insertAtBeginning(head, value) {
  const newNode = new Node(value);
  newNode.next = head;
  return newNode; // new head, no shifting needed
}

// Before: 10 → 20 → 30
// After:   5 → 10 → 20 → 30  ← only pointer changed
```

---

### 🧪 Code Example — Access by Index

**Array** — O(1), direct access:
```js
const arr = [10, 20, 30, 40];
console.log(arr[2]); // Output: 30 — instant
```

**Linked List** — O(n), must traverse:
```js
function getAtIndex(head, index) {
  let current = head;
  let i = 0;
  while (current) {
    if (i === index) return current.data;
    current = current.next;
    i++;
  }
  return null;
}

// To get index 2, we visit: 10 → 20 → 30
console.log(getAtIndex(head, 2)); // Output: 30 — after 3 steps
```
