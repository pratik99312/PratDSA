// Write a function that returns smallest number in an array

// let arr = [5, 0, 7, 10, 34, 17, 1, 97, 60];
let arrB = [-9, -19, -3, -21, -99, -1, -5, -7, -11];
function findSmallest(arr) {
  let smallest = arrB[0];
  for (let i = 0; i < arr.length; i++) {
    if (arrB[i] < smallest) {
      smallest = arrB[i];
    }
  }
  return smallest;
}

const result = findSmallest(arrB);

console.log("Smallest no in an array is:: " + result);
