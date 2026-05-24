Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
 

 

 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


# Missing Number — Interview Notes

## Problem

Given an array of numbers, find the missing number using the **Sum Formula**.

---

## Formula

```
Expected Sum = N * (N + 1) / 2
Missing Number = Expected Sum - Actual Sum
```

---

## Key Difference — Starting Point

| | Case 1 (tera) | Case 2 (mera) |
|---|---|---|
| Array | `[1, 2, 4, 5]` | `[3, 0, 1]` |
| Range | 1 to N | 0 to N |
| N | `nums.length + 1` | `nums.length` |

---

## Case 1 — Range 1 to N

```javascript
function missingNumber(nums) {
    let arrLength = nums.length + 1;
    let totalSum = (arrLength * (arrLength + 1)) / 2;

    let partialSum = 0;
    for (let i = 0; i < nums.length; i++) {
        partialSum = partialSum + nums[i];
    }

    return totalSum - partialSum;
}

let nums = [1, 2, 4, 5];
console.log("Missing no is ::", missingNumber(nums)); // 3
```

---

## Case 2 — Range 0 to N (LeetCode #268)

```javascript
function missingNumber(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;

    let actual = 0;
    for (let i = 0; i < nums.length; i++) {
        actual = actual + nums[i];
    }

    return expected - actual;
}

let nums = [3, 0, 1];
console.log("Missing no is ::", missingNumber(nums)); // 2
```

---

## Complexity

| | Value |
|---|---|
| Time | O(n) |
| Space | O(1) |

---

## Yaad rakhna

- Array `1 se N` start hoti hai → `N = nums.length + 1`
- Array `0 se N` start hoti hai → `N = nums.length`
- Dono interviews mein aate hain!