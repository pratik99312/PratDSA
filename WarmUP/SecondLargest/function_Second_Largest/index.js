// Find Second Largest no in an array

function secondLargest(arr) {
    let firstLargestNo = -Infinity;
    let secondLargestNo = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargestNo) {
            secondLargestNo = firstLargestNo;
            firstLargestNo = arr[i]

        } else if (arr[i] > secondLargestNo && arr[i] !== firstLargestNo) {
            secondLargestNo = arr[i];
        }

    }
    return secondLargestNo;
}

// let arr = [4, 9, 0, 2, 8, 7, 1, 15, 13];
let arr = [10, 20, 20]

let result = secondLargest(arr);

console.log("Second Largest Array is :: ", result)

//dry run
// arr = [10, 20, 20], firstLargestNo = -Infinity, secondLargestNo = -Infinity
// i = 0, arr[i] = 10, firstLargestNo = 10, secondLargestNo = -Infinity
// i = 1, arr[i] = 20, firstLargestNo = 20, secondLargestNo = 10
// i = 2, arr[i] = 20, firstLargestNo = 20, secondLargestNo = 10

// so the final result will be Second Largest Array is :: 10

// This is the optimized solution with O(1) space complexity and O(n) time complexity.      
