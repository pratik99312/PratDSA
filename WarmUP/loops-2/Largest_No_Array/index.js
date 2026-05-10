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
