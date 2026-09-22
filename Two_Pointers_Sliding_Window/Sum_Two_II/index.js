// LeetCode : Q.no 167 : Two Sum II

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum > target) {
      --j;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};

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

    // Example:
    // arr = [2, 7, 11, 15]
    // target = 9

    let i = 0;
    let j = arr.length - 1;

    // Initial values:
    // i = 0
    // j = 3
    //
    // Index:  0   1   2    3
    // Array: [2,  7,  11,  15]
    //         ↑            ↑
    //         i            j


    while(i < j) {

        let sum = arr[i] + arr[j];

        // -------------------------------
        // ITERATION 1
        // -------------------------------
        //
        // i = 0
        // j = 3
        //
        // arr[i] = arr[0] = 2
        // arr[j] = arr[3] = 15
        //
        // sum = 2 + 15
        // sum = 17
        //
        // 17 > target(9)
        //
        // Sum is too BIG
        // So move j to the left
        //
        // j--
        // j = 2


        if(sum > target) {
            --j;
        }


        // -------------------------------
        // ITERATION 2
        // -------------------------------
        //
        // i = 0
        // j = 2
        //
        // arr[i] = arr[0] = 2
        // arr[j] = arr[2] = 11
        //
        // sum = 2 + 11
        // sum = 13
        //
        // 13 > target(9)
        //
        // Sum is too BIG
        // So move j to the left
        //
        // j--
        // j = 1


        else if(sum < target) {
            i++;
        }


        // -------------------------------
        // ITERATION 3
        // -------------------------------
        //
        // i = 0
        // j = 1
        //
        // arr[i] = arr[0] = 2
        // arr[j] = arr[1] = 7
        //
        // sum = 2 + 7
        // sum = 9
        //
        // 9 == target(9)
        //
        // We found the answer!
        //
        // i = 0
        // j = 1
        //
        // But question expects 1-based index
        //
        // i + 1 = 1
        // j + 1 = 2
        //
        // return [1, 2]


        else {
            return [i + 1, j + 1];
        }
    }
};


// ==========================================
// TIME COMPLEXITY
// ==========================================
//
// We use two pointers:
//
// i → moves from left to right
// j → moves from right to left
//
// Each pointer moves at most n times.
//
// Therefore:
//
// Time Complexity = O(n)


// ==========================================
// SPACE COMPLEXITY
// ==========================================
//
// We are not using any extra data structure.
//
// Only variables:
//
// i
// j
// sum
//
// Therefore:
//
// Space Complexity = O(1)