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
