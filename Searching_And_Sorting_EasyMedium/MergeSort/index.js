// Write a program to perform Merge Sort in JavaScript

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(arr) {
     if(arr.length <= 1) return arr;

     let mid = Math.floor(arr.length/2);
     let left = sortArray(arr.slice(0,mid));
     let right = sortArray(arr.slice(mid));

     return merge(left,right);
};


function merge(left,right){
    let res= [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right [j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }

    return[ ...res, ...left.slice(i),  ...right.slice(j)];
}

const arr = [5, 2, 3, 1];

const result = sortArray(arr);

console.log("Merge Sort Array is::", result);

// Dry Run
// arr = [5, 2, 3, 1]
// mid = 2, left = sortArray([5, 2]), right = sortArray([3, 1])
// left = [2, 5], right = [1, 3]
// merge(left, right) => res = [1, 2, 3, 5]

// So the final output will be Merge Sort Array is:: [1, 2, 3, 5]

// This is the optimized solution with O(n) space complexity and O(n log n) time complexity.                