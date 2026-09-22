/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let n = arr.length;
        let map = {};
    for(let i = 0;i < n;i++){
        map[arr[i]]=i;
    }

    for(let i = 0;i<n;i++){
        let pairToFind = target - arr[i];
        if(map[pairToFind] && map[pairToFind] !== i){
            return [i,map[pairToFind]]
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


    let n = arr.length;

    // n = 4
    //
    // Because:
    // arr = [2, 7, 11, 15]
    //        0  1   2   3
    //
    // arr.length = 4


    let map = {};

    // Initially:
    // map = {}


    // ==========================================
    // FIRST FOR LOOP
    // ==========================================
    //
    // We are storing:
    // value -> index
    //
    // map[arr[i]] = i


    for(let i = 0; i < n; i++) {

        map[arr[i]] = i;

        // -------------------------
        // i = 0
        // -------------------------
        //
        // arr[0] = 2
        //
        // map[2] = 0
        //
        // map = {
        //     2: 0
        // }


        // -------------------------
        // i = 1
        // -------------------------
        //
        // arr[1] = 7
        //
        // map[7] = 1
        //
        // map = {
        //     2: 0,
        //     7: 1
        // }


        // -------------------------
        // i = 2
        // -------------------------
        //
        // arr[2] = 11
        //
        // map[11] = 2
        //
        // map = {
        //     2: 0,
        //     7: 1,
        //     11: 2
        // }


        // -------------------------
        // i = 3
        // -------------------------
        //
        // arr[3] = 15
        //
        // map[15] = 3
        //
        // map = {
        //     2: 0,
        //     7: 1,
        //     11: 2,
        //     15: 3
        // }
    }


    // ==========================================
    // SECOND FOR LOOP
    // ==========================================


    for(let i = 0; i < n; i++) {

        let pairToFind = target - arr[i];


        // -------------------------
        // i = 0
        // -------------------------
        //
        // arr[0] = 2
        //
        // pairToFind = target - arr[0]
        //             = 9 - 2
        //             = 7
        //
        // We need to find:
        // 2 + 7 = 9
        //
        // map[7] = 1
        //
        // So 7 exists in our map.


        if(map[pairToFind] && map[pairToFind] !== i){

            // map[7] = 1
            //
            // 1 is truthy
            // 1 !== 0
            //
            // Therefore condition is TRUE
            //
            // return [i, map[pairToFind]]
            //
            // return [0, 1]

            return [i, map[pairToFind]]
        }


        // ==========================================
        // LOOP STOPS HERE
        // ==========================================
        //
        // We don't reach:
        //
        // i = 1
        // i = 2
        // i = 3
        //
        // because we already found the pair.


    }

};


// FINAL ANSWER:
//
// [0, 1]
//
// Because:
//
// arr[0] + arr[1]
//     2  +   7
//          = 9


// ==========================================
// TIME COMPLEXITY
// ==========================================
//
// First loop  -> O(n)
// Second loop -> O(n)
//
// O(n) + O(n)
// = O(2n)
// = O(n)
//
// Time Complexity = O(n)


// ==========================================
// SPACE COMPLEXITY
// ==========================================
//
// We use an extra map/object.
//
// In the worst case, map stores n elements.
//
// Space Complexity = O(n)