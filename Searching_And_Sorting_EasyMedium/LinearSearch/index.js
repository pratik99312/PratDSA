// Write a Program Linear Search in JavaScript  


let arr = [4, 9, 1, 0, 2];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1;
}

const result = linearSearch(arr, 1);

console.log("Result index is::", result);

// Dry Run
// arr = [4, 9, 1, 0, 2], target = 1
// i = 0, arr[i] = 4, not equal to target
// i = 1, arr[i] = 9, not equal to target
// i = 2, arr[i] = 1, equal to target, return index 2

// So the final output will be Result index is:: 2

// This is the optimized solution with O(1) space complexity and O(n) time complexity.  