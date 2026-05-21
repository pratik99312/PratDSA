# Recursion in Data Structures & Algorithms (DSA) - Complete Guide

## Table of Contents
1. What is Recursion?
2. Important Formulas
3. Core Components
4. JavaScript Examples (All in One)
5. Types of Recursion
6. Real-World Use Cases
7. Advantages & Disadvantages
8. Practice Problems
9. Time Complexity
10. Pro Tips
11. Quick Reference

---

## What is Recursion?

**Recursion** is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems.

### Key Characteristics:
- Function calls itself
- Must have a **base case** (stopping condition)
- Must have a **recursive case** (problem breakdown)
- Uses **call stack** internally

---

## Important Formulas

| Concept | Formula / Complexity |
|---------|----------------------|
| Factorial | n! = n × (n-1)! |
| Fibonacci | F(n) = F(n-1) + F(n-2) |
| Time Complexity | O(recursive calls × work per call) |
| Space Complexity | O(max depth of recursion) |
| Tower of Hanoi | Moves = 2^n - 1 |

---

## Core Components

### 1. Base Case (Stopping Condition)
The condition that stops recursion from continuing indefinitely.

### 2. Recursive Case (Breaking Down)
The part where the function calls itself with a smaller input.

---

## JavaScript Examples - Complete

### Example 1: Factorial

`javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
`

### Example 2: Fibonacci

`javascript
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7)); // 13

// With Memoization (Optimized)
let memo = {};
function fibMemo(n) {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
}
console.log(fibMemo(50)); // 12586269025
`

### Example 3: Sum of Array

`javascript
function sumArray(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
`

### Example 4: Power Function

`javascript
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}
console.log(power(2, 5)); // 32

// Fast Power (Optimized)
function powerFast(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    if (exponent % 2 === 0) {
        let half = powerFast(base, exponent / 2);
        return half * half;
    }
    return base * powerFast(base, exponent - 1);
}
console.log(powerFast(2, 10)); // 1024
`

### Example 5: Reverse String

`javascript
function reverseString(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}
console.log(reverseString("hello")); // "olleh"
`

### Example 6: Palindrome Check

`javascript
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal: panama")); // true
`

### Example 7: GCD (Greatest Common Divisor)

`javascript
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6
`

### Example 8: Tower of Hanoi

`javascript
function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}
towerOfHanoi(3, 'A', 'B', 'C');
`

### Example 9: Binary Search

`javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
}
let sortedArr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedArr, 7)); // 3
`

### Example 10: Generate All Subsets

`javascript
function subsets(arr, index = 0, current = []) {
    if (index === arr.length) {
        console.log(current);
        return;
    }
    subsets(arr, index + 1, current);
    subsets(arr, index + 1, [...current, arr[index]]);
}
subsets([1, 2, 3]);
`

### Example 11: Generate All Permutations

`javascript
function permutations(str, current = "") {
    if (str.length === 0) {
        console.log(current);
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let remaining = str.slice(0, i) + str.slice(i + 1);
        permutations(remaining, current + str[i]);
    }
}
permutations("abc");
`

### Example 12: Countdown

`javascript
function countdown(n) {
    if (n === 0) {
        console.log("Blast off!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}
countdown(5);
`

### Example 13: Tree Traversal (DFS)

`javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}
inorder(root); // 4,2,5,1,3
`

### Example 14: Flatten Nested Array

`javascript
function flattenArray(arr) {
    let result = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            result.push(...flattenArray(element));
        } else {
            result.push(element);
        }
    }
    return result;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1,2,3,4,5,6]
`

### Example 15: Tail Recursion Factorial

`javascript
function tailFactorial(n, accumulator = 1) {
    if (n === 0) return accumulator;
    return tailFactorial(n - 1, n * accumulator);
}
console.log(tailFactorial(5)); // 120
`

---

## Types of Recursion

### 1. Direct Recursion
`javascript
function direct(n) {
    if (n <= 0) return;
    console.log(n);
    direct(n - 1);
}
`

### 2. Indirect Recursion
`javascript
function even(n) {
    if (n === 0) return true;
    return odd(n - 1);
}
function odd(n) {
    if (n === 0) return false;
    return even(n - 1);
}
console.log(even(4)); // true
`

### 3. Tail Recursion
`javascript
function tailRecursion(n, acc = 1) {
    if (n === 0) return acc;
    return tailRecursion(n - 1, n * acc);
}
`

### 4. Tree Recursion
`javascript
function treeRecursion(n) {
    if (n <= 0) return 0;
    console.log(n);
    treeRecursion(n - 1);
    treeRecursion(n - 2);
}
`

---

## Real-World Use Cases

### Use Case 1: File System Traversal

`javascript
let fileSystem = {
    name: "root",
    type: "folder",
    children: [
        { name: "file1.txt", type: "file" },
        { 
            name: "documents", 
            type: "folder",
            children: [
                { name: "resume.pdf", type: "file" }
            ]
        }
    ]
};

function listAllFiles(node, path = "") {
    let currentPath = path + "/" + node.name;
    if (node.type === "file") {
        console.log(currentPath);
        return;
    }
    if (node.children) {
        for (let child of node.children) {
            listAllFiles(child, currentPath);
        }
    }
}
listAllFiles(fileSystem);
`

### Use Case 2: Maze Solving

`javascript
let maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

function solveMaze(maze, x, y, solution = [], visited = new Set()) {
    let rows = maze.length, cols = maze[0].length;
    if (x === rows - 1 && y === cols - 1) {
        solution.push([x, y]);
        return true;
    }
    if (x < 0 || x >= rows || y < 0 || y >= cols) return false;
    if (maze[x][y] === 1) return false;
    let key = `${x},${y}`;
    if (visited.has(key)) return false;
    visited.add(key);
    solution.push([x, y]);
    if (solveMaze(maze, x + 1, y, solution, visited)) return true;
    if (solveMaze(maze, x - 1, y, solution, visited)) return true;
    if (solveMaze(maze, x, y + 1, solution, visited)) return true;
    if (solveMaze(maze, x, y - 1, solution, visited)) return true;
    solution.pop();
    return false;
}

let solution = [];
solveMaze(maze, 0, 0, solution);
console.log("Path:", solution);
`

### Use Case 3: Parse Nested JSON

`javascript
let data = {
    user: {
        name: "John",
        address: { city: "New York", zip: "10001" }
    }
};

function findValue(obj, targetKey, result = []) {
    for (let key in obj) {
        if (key === targetKey) result.push(obj[key]);
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            findValue(obj[key], targetKey, result);
        }
    }
    return result;
}
console.log(findValue(data, "city")); // ["New York"]
`

### Use Case 4: Calculate Directory Size

`javascript
let directory = {
    name: "root",
    children: [
        { name: "file1.txt", size: 100, type: "file" },
        { name: "file2.txt", size: 200, type: "file" },
        {
            name: "subfolder", type: "folder",
            children: [
                { name: "file3.txt", size: 300, type: "file" }
            ]
        }
    ]
};

function calculateSize(node) {
    if (node.type === "file") return node.size;
    let total = 0;
    if (node.children) {
        for (let child of node.children) {
            total += calculateSize(child);
        }
    }
    return total;
}
console.log("Total size:", calculateSize(directory)); // 600
`

---

## Advantages vs Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Simplifies complex problems | High memory usage (call stack) |
| Elegant and clean code | Slower than iteration |
| Natural for tree/graph traversal | Risk of stack overflow |
| Great for backtracking | Hard to debug |
| Easy to implement divide & conquer | Can cause exponential time |

---

## Practice Problems

| Difficulty | Problem | Time Complexity |
|------------|---------|-----------------|
| Easy | Factorial | O(n) |
| Easy | Fibonacci (basic) | O(2^n) |
| Easy | Sum of digits | O(log n) |
| Easy | Power function | O(n) |
| Medium | Palindrome check | O(n) |
| Medium | Binary search | O(log n) |
| Medium | Tower of Hanoi | O(2^n) |
| Medium | Generate subsets | O(2^n) |
| Medium | Generate permutations | O(n!) |
| Hard | N-Queens problem | O(n!) |
| Hard | Maze solving | O(4^(n*m)) |

---

## Time Complexity Cheat Sheet

| Problem | Time Complexity | Space Complexity |
|---------|-----------------|------------------|
| Factorial | O(n) | O(n) |
| Fibonacci (basic) | O(2^n) | O(n) |
| Fibonacci (memoized) | O(n) | O(n) |
| Binary Search | O(log n) | O(log n) |
| Tower of Hanoi | O(2^n) | O(n) |
| Subsets | O(2^n) | O(2^n) |
| Permutations | O(n!) | O(n!) |
| Tree Traversal (DFS) | O(n) | O(h) |
| Merge Sort | O(n log n) | O(n) |

---

## Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| Code length | Shorter | Longer |
| Memory usage | More | Less |
| Speed | Slower | Faster |
| Stack overflow risk | Yes | No |
| Best for | Trees, graphs | Simple loops |

---

## Pro Tips

1. **Always define a base case first** - Prevents infinite recursion
2. **Ensure the problem gets smaller** - Each call moves toward base case
3. **Watch for stack overflow** - Recursion depth > 10,000 may crash
4. **Use memoization** - Cache results for overlapping subproblems
5. **Consider tail recursion** - Some languages optimize it
6. **Convert to iteration** - If recursion depth is too high
7. **Use recursion for tree/graph problems** - Natural fit
8. **Debug with console.log** - Print parameters at each call
9. **Draw recursion tree** - Visualize the call hierarchy
10. **Use default parameters** - For accumulator pattern

---

## Debugging Recursion

`javascript
function debugFactorial(n, depth = 0) {
    let indent = "  ".repeat(depth);
    console.log(`${indent}factorial(${n}) called`);
    if (n === 0 || n === 1) {
        console.log(`${indent}Returning 1`);
        return 1;
    }
    let result = n * debugFactorial(n - 1, depth + 1);
    console.log(`${indent}Returning ${result}`);
    return result;
}
debugFactorial(4);
`

---

## Quick Reference Card

`javascript
// Basic recursion template
function recursiveFunction(parameter) {
    // 1. Base case
    if (baseCondition) return baseValue;
    // 2. Recursive case
    return recursiveFunction(smallerParameter);
}

// Common patterns
function fact(n) { if (n <= 1) return 1; return n * fact(n - 1); }
function fib(n) { if (n <= 1) return n; return fib(n - 1) + fib(n - 2); }
function sum(arr, i = 0) { if (i === arr.length) return 0; return arr[i] + sum(arr, i + 1); }
function reverse(s) { if (s.length <= 1) return s; return reverse(s.slice(1)) + s[0]; }
function palindrome(s) { if (s.length <= 1) return true; if (s[0] !== s[s.length-1]) return false; return palindrome(s.slice(1, -1)); }
function pow(b, e) { if (e === 0) return 1; return b * pow(b, e - 1); }
function gcd(a, b) { if (b === 0) return a; return gcd(b, a % b); }
`

---

## Summary

| Aspect | Description |
|--------|-------------|
| Definition | Function that calls itself |
| Must Have | Base case + Recursive case |
| Memory | Uses call stack |
| Best For | Tree/Graph traversal, Divide & Conquer |
| Avoid For | Deep recursion, Performance-critical code |

---

## Key Takeaways

- Recursion breaks complex problems into smaller, similar subproblems
- Every recursive function MUST have a base case to terminate
- Recursion uses the call stack - too many calls cause stack overflow
- Memoization can optimize recursive functions with overlapping subproblems
- Recursive code is often shorter and more elegant than iterative
- Tree/graph traversal is naturally recursive
- Some problems (Tower of Hanoi, backtracking) are extremely hard without recursion

---

> **Remember:** "To understand recursion, you must first understand recursion." Practice with factorial, fibonacci, and tree traversal first.

---

**Happy Recursing! 🚀**