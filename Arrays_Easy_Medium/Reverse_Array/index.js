// write a program to reverse array 

let arr = [1, 2, 3, 4, 5]



let newArray = [];

function arrayReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }

    return newArray;

}

const result = arrayReverse(arr);

console.log("Reverse Array is::", result)

// Two Pointers

function reverseArray(nums) {
  for (let left = 0, right = nums.length - 1; left < right; left++, right--) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
  return nums;
}

const res= reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

console.log("Two Pointer solutions::",res)


// example 2 Two Pointers

function reverseArray2(nums) {
  for (let i = 0; i < nums.length / 2; i++) {
    let temp = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length - 1 - i] = temp;
  }
  return nums;
}

reverseArray2([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

const res2= reverseArray2([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

console.log("Two Pointer solutions for(let i = 0;..)::",res2)