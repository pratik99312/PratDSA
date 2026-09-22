// leetcode Q.no : 1 : Two Sum

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let n = arr.length;
    for(let i = 0;i < n -1;i++){
        for(let j= i+1;j< n;j++){
            let sum = arr[i]+arr[j];
            if(sum===target){
                return [i,j]
            }
        }
    }
};

// leetcode Q.no : 1 : Two Sum

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    
    let n = arr.length;

    // Brute Force Approach
    //
    // We check every possible pair.
    //
    // Example:
    // arr = [2, 7, 11, 15]
    // target = 9
    //
    // i = 0, j = 1
    // 2 + 7 = 9
    // return [0, 1]


    for(let i = 0; i < n - 1; i++) {

        for(let j = i + 1; j < n; j++) {

            let sum = arr[i] + arr[j];

            if(sum === target) {
                return [i, j];
            }
        }
    }
};


// ==========================================
// TIME COMPLEXITY
// ==========================================
//
// We have two nested loops.
//
// Outer loop  → O(n)
// Inner loop  → O(n)
//
// Therefore:
//
// Time Complexity = O(n²)
//
//
// ==========================================
// SPACE COMPLEXITY
// ==========================================
//
// We are not using any extra data structure.
//
// Only variables:
// n, i, j, sum
//
// Therefore:
//
// Space Complexity = O(1)