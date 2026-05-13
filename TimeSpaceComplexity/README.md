# TIME SPACE COMPLEXITY

1. It is used to measure efficiency of the algorithm in terms of speed, as the input size grows.

---

## Big O Notation — Name & Speed Table

| Notation     | Name         | Speed      | Real Example                  |
|--------------|--------------|------------|-------------------------------|
| O(1)         | Constant     | ⚡ Fastest  | Array access `arr[0]`, HashMap lookup |
| O(log n)     | Logarithmic  | ✅ Fast     | Binary Search                 |
| O(n)         | Linear       | 🟡 OK       | Linear Search, for loop       |
| O(n log n)   | Linearithmic | 🟡 Medium   | Merge Sort, Quick Sort (avg)  |
| O(n²)        | Quadratic    | 🔴 Slow     | Bubble Sort, nested loops     |
| O(2ⁿ)        | Exponential  | ❌ Very Slow| Fibonacci (naive recursive)   |
| O(n!)        | Factorial    | 💀 Worst    | Travelling Salesman (brute)   |

---

## Big O Growth Graph (ASCII)

```
Operations
|
|                                        * O(2ⁿ)
|                                   *
|                              *
|                         *
|              * * * * *            O(n²)
|         * *
|     * *
|   *  *                            O(n log n)
|  * *
| **                                O(n)
|* . . . . . . . . . .              O(log n)
|* * * * * * * * * * *              O(1)
|___________________________
  1   5   10   15   20   n
```

Best ---> Worst:  O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

---

# Linear Search

1.  [2,1,3,5,4,7]

search (5)

n elements
n times

if n = 1000 then x = 1000

# X === No.of times the operation will be performend or iterated

### Notation: O(n) — Linear

### Example:
```js
// Linear Search — O(n) Time, O(1) Space
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {  // n times
    if (arr[i] === target) return i;
  }
  return -1;
}

linearSearch([2, 1, 3, 5, 4, 7], 5);
// n = 6 → checks up to 6 elements
// n = 1000 → checks up to 1000 elements
```

### Speed at different input sizes:
| n (input) | x (operations) |
|-----------|----------------|
| 10        | 10             |
| 100       | 100            |
| 1000      | 1000           |
| 10000     | 10000          |

---

# Binary Search

1.  [1,3,4,7,9,10,15]

search (15)

n elements
n times

if n = 1000 then x = 10

# X === No.of times the operation will be performend or iterated

# -----> x = log2n

if n = 100 then x = 7
if n = 1000 then x = 10

### Notation: O(log n) — Logarithmic

### Example:
```js
// Binary Search — O(log n) Time, O(1) Space
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {             // log2(n) times
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

binarySearch([1, 3, 4, 7, 9, 10, 15], 15);
// n = 7 → max 3 steps (log2 7 ≈ 3)
// n = 1000 → max 10 steps (log2 1000 ≈ 10)
// n = 1000000 → max 20 steps (log2 1M = 20)
```

### Speed at different input sizes:
| n (input)  | x (operations) | Why so fast?          |
|------------|----------------|-----------------------|
| 10         | 4              | Half ho jaata har baar|
| 100        | 7              | Half ho jaata har baar|
| 1000       | 10             | Half ho jaata har baar|
| 1,000,000  | 20             | Half ho jaata har baar|

---

## Linear vs Binary — Side by Side

| n = 1,000,000 | Linear Search | Binary Search |
|---------------|---------------|---------------|
| Steps needed  | 1,000,000     | 20            |
| Notation      | O(n)          | O(log n)      |
| Speed         | 🔴 Slow        | ⚡ Fast        |

---

## Space Complexity (Memory)

| Algorithm      | Time     | Space  | Note                          |
|----------------|----------|--------|-------------------------------|
| Linear Search  | O(n)     | O(1)   | No extra memory used          |
| Binary Search  | O(log n) | O(1)   | Iterative — no extra memory   |
| Merge Sort     | O(n log n)| O(n)  | Needs extra array to merge    |
| Bubble Sort    | O(n²)    | O(1)   | In-place sorting              |
| Fibonacci (DP) | O(n)     | O(1)   | Just 2 variables needed       |
