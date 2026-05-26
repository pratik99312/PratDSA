// Write a program to perform Selection Sort in JavaScript

let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function selectionSort(a) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }

  return arr;
}

const result = selectionSort(arr);

console.log("Selection Sort Array is::", result);

// Dry Run
// arr = [7, 1, 5, 12, -10, 0, 4, 3, 2]
// i = 0, min = 0, j = 1 to 8, min = 4 (value -10), swap arr[0] and arr[4], arr = [-10, 1, 5, 12, 7, 0, 4, 3, 2]
// i = 1, min = 1, j = 2 to 8, min = 5 (value 0), swap arr[1] and arr[5], arr = [-10, 0, 5, 12, 7, 1, 4, 3, 2]
// i =2 , min =2 , j=3 to8 , min=6 (value4) , swap arr[2] and arr[6], arr=[-10 ,0, 4, 12, 7, 1, 5, 3, 2]
// i =3 , min=3 , j=4 to8 , min=7 (value3) , swap arr[3] and arr[7], arr=[-10 ,0 ,4 ,3 ,7 ,1 ,5 ,12 ,2]
// i =4 , min=4 , j=5 to8 , min=5 (value1) , swap arr[4] and arr[5], arr=[-10 ,0 ,4 ,3 ,1 ,7 ,5 ,12 ,2]
// i =5 , min=5 , j=6 to8 , min=6 (value5) , swap arr[5] and arr[6], arr=[-10 ,0 ,4 ,3 ,1 ,5 ,7 ,12 ,2]
// i =6, min=6, j=7 to8, min=8 (value2), swap arr[6] and arr[8], arr=[-10 ,0 ,4 ,3 ,1 ,5 ,2 ,12 ,7]
// i =7, min=7, j=8 to8, min=7 (value12), no swap, arr=[-10 ,0 ,4 ,3 ,1 ,5 ,2 ,12 ,7]

// So the final output will be Selection Sort Array is:: [-10, 0, 1, 2, 3, 4, 5, 7, 12]

// This is the optimized solution with O(1) space complexity and O(n^2) time complexity.
