// Write a function to perform Bubble Sort in JavaScript

let arr = [5, 4, 9, 15, 7, 1, 0, 6, 34, 56, 45];

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let isSwapped = false;


        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}

const result = bubbleSort(arr);

console.log("BubbleSort Array is::", result)

// Dry Run
// arr = [5, 4, 9, 15, 7, 1, 0, 6, 34, 56, 45]
// i = 0, j = 0 to 9, after first pass arr = [4, 5, 9, 7, 1, 0, 6, 15, 34, 45, 56]
// i = 1, j = 0 to 8, after second pass arr = [4, 5, 7, 1, 0, 6, 9, 15, 34, 45, 56]
// i = 2, j = 0 to 7, after third pass arr = [4, 5, 1, 0, 6, 7, 9, 15, 34, 45, 56]
// i =3 , j =0 to6 , after fourth pass arr = [4, 1, 0, 6, 5, 7, 9, 15, 34, 45, 56]
// i =4 , j =0 to5 , after fifth pass arr = [1, 0, 4, 6, 5, 7, 9, 15, 34, 45, 56]
// i =5 , j =0 to4 , after sixth pass arr = [0, 1, 4, 6, 5, 7, 9, 15, 34, 45, 56]
// i =6 , j =0 to3 , after seventh pass arr = [0, 1, 4, 5, 6, 7, 9, 15, 34, 45, 56]
// i =7 , j =0 to2 , after eighth pass arr = [0, 1, 4, 5, 6, 7, 9, 15, 34, 45, 56]
// i =8 , j =0 to1 , after ninth pass arr = [0, 1, 4, 5, 6, 7, 9, 15, 34, 45, 56]

// So the final output will be BubbleSort Array is:: [0, 1, 4, 5, 6, 7, 9, 15, 34, 45, 56]

// This is the optimized solution with O(1) space complexity and O(n^2) time complexity.
