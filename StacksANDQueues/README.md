# Data Structures and Algorithms in JavaScript
## Stacks and Queues

---

## 📚 Table of Contents
- [Stack](#stack)
- [Queue](#queue)
- [Comparison](#comparison)

---

## Stack

### Definition
A **Stack** is a linear data structure that follows the **LIFO (Last In, First Out)** principle. The last element added to the stack is the first one to be removed — just like a stack of plates.

### Core Operations
| Operation | Description | Time Complexity |
|-----------|-------------|------------------|
| `push()`  | Add element to top | O(1) |
| `pop()`   | Remove element from top | O(1) |
| `peek()`  | View top element | O(1) |
| `isEmpty()` | Check if stack is empty | O(1) |

### Importance in DSA
- Used in **function call management** (call stack, recursion)
- Powers **undo/redo** functionality in applications
- Used in **expression evaluation** (infix, postfix, prefix conversions)
- Helps in **balanced parentheses / bracket matching**
- Backbone of **backtracking algorithms** (maze solving, DFS)
- Used in **browser history** (back button navigation)

### Example: Stack Implementation

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to top
  push(element) {
    this.items.push(element);
  }

  // Remove and return top element
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // View top element without removing
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get stack size
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.toString());
  }
}

// Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();      // 10,20,30
console.log(stack.pop());   // 30
console.log(stack.peek());  // 20
```

### Real-World Use Case: Balanced Parentheses

```javascript
function isBalanced(expression) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let char of expression) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
```

---

## Queue

### Definition
A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle. The first element added is the first one to be removed — just like a queue of people waiting in line.

### Core Operations
| Operation | Description | Time Complexity |
|-----------|-------------|------------------|
| `enqueue()` | Add element to rear | O(1) |
| `dequeue()` | Remove element from front | O(1) |
| `front()`   | View front element | O(1) |
| `isEmpty()` | Check if queue is empty | O(1) |

### Importance in DSA
- Used in **CPU/OS process scheduling**
- Core structure for **BFS (Breadth-First Search)** in graphs and trees
- Handles **request handling** in web servers (task queues)
- Used in **print queue** and **job scheduling** systems
- Implements **caching mechanisms** (LRU cache with deque)
- Manages **data streaming** and buffering (e.g., IO buffers)

### Example: Queue Implementation

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // View front element
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get queue size
  size() {
    return this.items.length;
  }

  // Print queue
  print() {
    console.log(this.items.toString());
  }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();       // 10,20,30
console.log(queue.dequeue());  // 10
console.log(queue.front());    // 20
```

### Real-World Use Case: BFS Traversal

```javascript
function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  const result = [];

  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D']
```

---

## Comparison

| Feature | Stack | Queue |
|---------|-------|-------|
| **Principle** | LIFO (Last In, First Out) | FIFO (First In, First Out) |
| **Insertion** | At one end (top) | At rear |
| **Deletion** | At same end (top) | At front |
| **Real-life analogy** | Stack of plates | Line at a ticket counter |
| **Primary Use** | Recursion, undo operations, backtracking | Scheduling, BFS, buffering |
| **Access Pattern** | Only top element accessible | Only front and rear accessible |
| **Common Methods** | push, pop, peek | enqueue, dequeue, front |
| **Traversal Algorithm** | DFS (Depth-First Search) | BFS (Breadth-First Search) |
| **Time Complexity (insert/delete)** | O(1) | O(1) |

---

## Summary
- Use a **Stack** when you need to reverse order or track "last action" (undo, recursion, parsing).
- Use a **Queue** when you need to preserve order of processing (scheduling, level-order traversal).

---

## 🔗 Further Practice Problems
- Stack: Valid Parentheses, Next Greater Element, Min Stack
- Queue: Implement Queue using Stacks, Sliding Window Maximum, Rotten Oranges (BFS)