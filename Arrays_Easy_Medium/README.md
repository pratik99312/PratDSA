# Arrays in Data Structures & Algorithms (DSA) - Complete Guide

## What is an Array?

An **array** is a linear data structure that stores a collection of elements in contiguous memory locations. Each element can be accessed directly using its index (usually starting from 0).

### Key Characteristics:
- Fixed size (in static arrays) or dynamic (in dynamic arrays/lists)
- Index-based access → O(1) time complexity
- Contiguous memory allocation → cache-friendly
- Homogeneous elements (in traditional arrays)

---

## Where are Arrays Used?

| Domain | Use Cases |
|--------|-----------|
| Data Storage | Storing lists of numbers, names, records |
| Matrix Operations | Image processing, graphs (adjacency matrix) |
| String Manipulation | Strings are arrays of characters |
| Algorithm Backbone | Sorting, searching, dynamic programming |
| CPU Scheduling | Process queues, memory management |
| Lookup Tables | Precomputed results, hash table implementation |
| Game Development | Grids, tile maps, high-score boards |
| IoT & Embedded | Sensor data streams, buffer storage |

---

## Important Formulas

| Operation | Formula / Complexity |
|-----------|----------------------|
| Base Address | Address(arr[i]) = Base + i * size_of_element |
| Row-Major Index (2D) | index = (row * cols) + col |
| Column-Major Index (2D) | index = (col * rows) + row |
| Access Time | O(1) |
| Search (unsorted) | O(n) |
| Search (sorted) | O(log n) using binary search |
| Insertion (at end) | O(1) amortized (dynamic array) |
| Insertion (at middle) | O(n) |
| Deletion (anywhere) | O(n) |

---

## Core Operations (Traversal, Insertion, Deletion, Search, Update)

### 1. TRAVERSAL

**Definition:** Visiting each element of the array exactly once.

`javascript
let arr = [10, 20, 30, 40, 50];

// Method 1: Traditional for loop
for (let i = 0; i < arr.length; i++) {
    console.log(Element at index ${i}: ${arr[i]});
}

// Method 2: forEach loop
arr.forEach((element, index) => {
    console.log(Element at index ${index}: ${element});
});

// Method 3: for...of loop
for (let element of arr) {
    console.log(element);
}

// Method 4: while loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
`

### 2. INSERTION

**Definition:** Adding a new element at a specific position in the array.

`javascript
let arr = [10, 20, 30, 40, 50];

// Insertion at the end (push)
arr.push(60);
console.log("After push:", arr); // [10, 20, 30, 40, 50, 60]

// Insertion at the beginning (unshift)
arr.unshift(5);
console.log("After unshift:", arr); // [5, 10, 20, 30, 40, 50, 60]

// Insertion at specific position (using splice)
arr.splice(3, 0, 25);
console.log("After insert at index 3:", arr); // [5, 10, 20, 25, 30, 40, 50, 60]

// Manual insertion at specific position
function insertAtPosition(arr, element, position) {
    for (let i = arr.length; i > position; i--) {
        arr[i] = arr[i - 1];
    }
    arr[position] = element;
    return arr;
}
console.log("Manual insert:", insertAtPosition([1,2,3,4], 99, 2)); // [1,2,99,3,4]
`

### 3. DELETION

**Definition:** Removing an element from a specific position in the array.

`javascript
let arr = [10, 20, 30, 40, 50, 60];

// Deletion from the end (pop)
arr.pop();
console.log("After pop:", arr); // [10, 20, 30, 40, 50]

// Deletion from the beginning (shift)
arr.shift();
console.log("After shift:", arr); // [20, 30, 40, 50]

// Deletion from specific position (using splice)
arr.splice(2, 1);
console.log("After removing index 2:", arr); // [20, 30, 50]

// Manual deletion from specific position
function deleteAtPosition(arr, position) {
    for (let i = position; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return arr;
}
console.log("Manual delete:", deleteAtPosition([1,2,3,4,5], 2)); // [1,2,4,5]
`

### 4. SEARCH

**Definition:** Finding the index of a specific element in the array.

`javascript
let arr = [10, 20, 30, 40, 50, 30];

// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
console.log("Linear Search - 30 found at:", linearSearch(arr, 30)); // 2

// Binary Search (for sorted arrays)
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
let sorted = [10, 20, 30, 40, 50];
console.log("Binary Search - 40 found at:", binarySearch(sorted, 40)); // 3

// Built-in search methods
console.log("indexOf:", arr.indexOf(30));        // 2
console.log("lastIndexOf:", arr.lastIndexOf(30)); // 5
console.log("find:", arr.find(x => x > 35));     // 40
console.log("findIndex:", arr.findIndex(x => x > 35)); // 3
console.log("includes:", arr.includes(40));      // true
`

### 5. UPDATE

**Definition:** Modifying the value of an element at a specific position.

`javascript
let arr = [10, 20, 30, 40, 50];

// Update by index
arr[2] = 99;
console.log("After update:", arr); // [10, 20, 99, 40, 50]

// Update using fill
let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 1, 4);
console.log("After fill:", arr2); // [1, 0, 0, 0, 5]

// Update using map
let arr3 = [1, 2, 3, 4, 5];
let updated = arr3.map(x => x * 2);
console.log("After map:", updated); // [2, 4, 6, 8, 10]

// Manual update
function updateAtPosition(arr, element, position) {
    if (position >= 0 && position < arr.length) {
        arr[position] = element;
    }
    return arr;
}
console.log("Manual update:", updateAtPosition([1,2,3,4], 99, 2)); // [1,2,99,4]
`

---

## Real-World Use Cases

### Use Case 1: Storing & Processing Sensor Data

`javascript
let temperatureReadings = [22.5, 23.1, 21.8, 24.0, 22.9];
let avgTemp = temperatureReadings.reduce((a,b) => a+b) / temperatureReadings.length;
let maxTemp = Math.max(...temperatureReadings);
let minTemp = Math.min(...temperatureReadings);
console.log(Average: ${avgTemp}, Max: ${maxTemp}, Min: ${minTemp});
`

### Use Case 2: Implementing Stacks & Queues

`javascript
// Stack (LIFO) - Last In First Out
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}

// Queue (FIFO) - First In First Out
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift(); }
    front() { return this.items[0]; }
    isEmpty() { return this.items.length === 0; }
    size() { return this.items.length; }
}
`

### Use Case 3: Memoization / Dynamic Programming

`javascript
// Fibonacci with memoization
let memo = [];
function fib(n) {
    if (memo[n]) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
}

// Factorial with memoization
let factMemo = [];
function factorial(n) {
    if (factMemo[n]) return factMemo[n];
    if (n === 0 || n === 1) return 1;
    factMemo[n] = n * factorial(n-1);
    return factMemo[n];
}
`

### Use Case 4: Frequency Counters

`javascript
// Count character frequency
let str = "hello";
let freq = new Array(26).fill(0);
for (let char of str) {
    freq[char.charCodeAt(0) - 97]++;
}
console.log(freq);

// Count number frequency
let nums = [1, 2, 2, 3, 3, 3, 4];
let frequency = {};
for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
}
console.log(frequency); // {1:1, 2:2, 3:3, 4:1}
`

### Use Case 5: Rotating Arrays

`javascript
// Rotate array right by k positions
function rotateRight(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateRight([1,2,3,4,5], 2)); // [4,5,1,2,3]

// In-place rotation
function rotateInPlace(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
`

### Use Case 6: Two Pointer Technique

`javascript
// Find pair with target sum in sorted array
function twoSumSorted(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        else if (sum < target) left++;
        else right--;
    }
    return [-1, -1];
}
console.log(twoSumSorted([1,2,3,4,5], 7)); // [1, 4]

// Remove duplicates from sorted array
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
`

### Use Case 7: Sliding Window Technique

`javascript
// Maximum sum subarray of size k
function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[i - (k - 1)];
        }
    }
    return maxSum;
}
console.log(maxSumSubarray([1, 3, 2, 6, 1, 4, 1, 8, 2], 3)); // 13

// Longest substring without repeating characters
function longestUniqueSubstr(str) {
    let seen = new Array(256).fill(-1);
    let maxLen = 0, start = 0;
    
    for (let end = 0; end < str.length; end++) {
        let charCode = str.charCodeAt(end);
        if (seen[charCode] >= start) {
            start = seen[charCode] + 1;
        }
        seen[charCode] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}
`

### Use Case 8: Kadane's Algorithm (Maximum Subarray Sum)

`javascript
function kadane(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
console.log(kadane([-2,1,-3,4,-1,2,1,-5,4])); // 6
`

---

## Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Fast O(1) random access | Fixed size (static arrays) |
| Cache friendly (contiguous memory) | Costly insertion/deletion (O(n)) |
| Simple to implement | Wasted memory if underfilled |
| Good for known/fixed data | Requires contiguous memory block |
| Memory efficient (no extra pointers) | Shifting elements is expensive |
| Easy to traverse | Resizing is costly for static arrays |

---

## Practice Problems (Beginner → Advanced)

| Difficulty | Problem | Solution Approach |
|------------|---------|-------------------|
| Easy | Find max/min element | Linear traversal |
| Easy | Reverse an array | Two pointers |
| Easy | Sum of all elements | Reduce/loop |
| Easy | Find second largest element | Single pass tracking |
| Easy | Check if array is sorted | Compare adjacent |
| Medium | Two Sum (target sum) | Hash map or two pointers |
| Medium | Rotate array by k positions | Reverse technique |
| Medium | Remove duplicates from sorted array | Two pointers |
| Medium | Move all zeros to end | Two pointers |
| Medium | Find missing number | Sum formula or XOR |
| Medium | Find duplicate number | Floyd's cycle detection |
| Hard | Kadane's Algorithm | Dynamic programming |
| Hard | Merge two sorted arrays | Two pointers from end |
| Hard | Trapping Rainwater | Two pointers |
| Hard | Sliding window maximum | Deque |
| Hard | First missing positive | Cycle sort |

---

## Time Complexity Cheat Sheet

| Operation | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Access by index | O(1) | O(1) |
| Search (unsorted) | O(n) | O(1) |
| Search (sorted, binary) | O(log n) | O(1) |
| Insert at end (dynamic) | O(1)* amortized | O(1) |
| Insert at beginning/middle | O(n) | O(1) |
| Delete at end | O(1) | O(1) |
| Delete at beginning/middle | O(n) | O(1) |
| Traversal | O(n) | O(1) |
| Update by index | O(1) | O(1) |
| Copy array | O(n) | O(n) |
| Sort (quick/merge) | O(n log n) | O(log n) to O(n) |
| Reverse | O(n) | O(1) |
| Rotate (using reverse) | O(n) | O(1) |
| Two pointers technique | O(n) | O(1) |
| Sliding window | O(n) | O(1) to O(k) |
| Kadane's algorithm | O(n) | O(1) |

---

## Pro Tips

1. Pre-allocate size if you know capacity (avoids dynamic resizing cost)
2. Use Sliding Window technique for subarray problems
3. Use Two Pointers for sorted array problems
4. In JS, Array is dynamic — prefer new Array(size) for fixed-size for performance
5. For large data, consider TypedArrays (e.g., Uint8Array, Float64Array)
6. Use splice() for insert/delete, but be careful - it's O(n)
7. Spread operator [...arr] creates shallow copy
8. Array.from() is great for converting array-like objects
9. For matrix operations, consider flattening the array for better performance
10. Use map() instead of for loops for better readability when transforming data
11. Prefix sum is powerful for range sum queries
12. Two pointers works for palindrome checking, pair sums, and container problems
13. Cyclic sort works when numbers are from 1 to n
14. Use bitwise XOR for finding missing/duplicate numbers
15. Dutch national flag algorithm for sorting 0s, 1s, and 2s in O(n)

---

## Related Topics to Learn Next

After mastering arrays, learn these data structures:

1. Linked Lists - Overcomes array size limitations
2. Hash Maps / Hash Tables - Faster lookups (O(1) average)
3. Strings - Specialized character arrays
4. Matrix Operations - 2D arrays
5. Sorting Algorithms - Bubble, Selection, Insertion, Merge, Quick
6. Searching Algorithms - Linear, Binary, Exponential
7. Stacks & Queues - Built on arrays
8. Heaps - Array-based tree structure
9. Dynamic Programming - Array-based memoization
10. Graphs - Adjacency matrix representation
11. Trie - Array-based children pointers
12. Segment Trees - Array-based tree for range queries

---

## Quick Reference Card

`javascript
// Common array operations cheat sheet

// Creation
let arr = [1, 2, 3];
let arr2 = new Array(5);
let arr3 = Array.from("hello");

// Basic ops
arr.push(4);        // add end
arr.pop();          // remove end
arr.unshift(0);     // add start
arr.shift();        // remove start
arr.splice(2, 0, 5); // insert at index 2
arr.splice(2, 1);   // remove at index 2
arr.indexOf(3);     // find index
arr.includes(3);    // check existence

// Iteration
arr.forEach(x => console.log(x));
for (let x of arr) {}
for (let i in arr) {}

// Transformation
arr.map(x => x * 2);
arr.filter(x => x > 2);
arr.reduce((a,b) => a+b, 0);
arr.sort((a,b) => a-b);
arr.reverse();

// Utility
arr.slice(1, 3);
[...arr];           // copy
Array.isArray(arr);
arr.length;
arr.fill(0, 1, 3);
arr.flat();
`

---

## Summary

| Aspect | Description |
|--------|-------------|
| Definition | Contiguous memory storage of homogeneous elements |
| Access Time | O(1) random access |
| Insertion | O(n) except at end |
| Deletion | O(n) except at end |
| Search | O(n) unsorted, O(log n) sorted |
| Memory | Contiguous, cache-friendly |
| Best For | Fixed-size collections, frequent access |
| Worst For | Frequent insertions/deletions |

---

## Key Takeaways

- Fast O(1) access by index - arrays excel at random access
- Simple and efficient for fixed-size collections
- Cache-friendly due to contiguous memory
- Foundation for other data structures - stacks, queues, heaps, etc.
- Expensive insertions/deletions (O(n)) except at end
- Fixed size in static implementations
- Shifting elements is costly for middle operations

---

> Remember: Arrays are the foundation of DSA. Mastering arrays makes learning stacks, queues, heaps, and dynamic programming much easier. Practice the operations - traversal, insertion, deletion, search, and update - until they become second nature!

---

**Happy Coding! 🚀**