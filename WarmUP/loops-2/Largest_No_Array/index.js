// Write a function that returns largest number in an array

let arr = [5, 0, 7, 10, 34, 17, 1, 97,60];
let arrB = [-9,-19,-3]
function findLargest(arr) {
  let largest = -Infinity ;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];

    }
  }
  return largest;
}


const result = findLargest(arrB);

console.log("Largest no in an array is:: " + result);

// let largest = Infinity
// let largest = -Infinity


//let largest =  arr[0]

//dry run
// arr = [5, 0, 7, 10, 34, 17, 1, 97,60], largest = -Infinity
// i = 0, arr[i] = 5, largest = 5
// i = 1, arr[i] = 0, largest = 5
// i = 2, arr[i] = 7, largest = 7
// i = 3, arr[i] = 10, largest = 10
// i = 4, arr[i] = 34, largest = 34                                         

// i = 5, arr[i] = 17, largest = 34
// i = 6, arr[i] = 1, largest = 34
// i = 7, arr[i] = 97, largest = 97
// i = 8, arr[i] = 60, largest = 97

// so the final result will be Largest no in an array is:: 97

// This is the optimized solution with O(1) space complexity and O(n) time complexity.    
