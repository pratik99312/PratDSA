/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for(let i= 0; i <= n-m;i++){
        let j= 0 ;
        for(j=0;j<m;j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j == m){
            return i
        }
    }
    return -1;
};


// leetcode Q.no : 28 : Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {

    // Example:
    //
    // haystack = "sadbutsad"
    // needle   = "sad"
    //
    // Expected Answer:
    // 0


    let n = haystack.length;
    let m = needle.length;

    // n = 9
    // m = 3
    //
    // haystack = "sadbutsad"
    //             012345678
    //
    // needle = "sad"
    //           012


    // ==========================================
    // OUTER LOOP
    // ==========================================
    //
    // i <= n - m
    //
    // n - m = 9 - 3
    //       = 6
    //
    // So i can go from 0 to 6


    for(let i = 0; i <= n - m; i++) {

        let j = 0;

        // ==========================================
        // ITERATION 1
        // ==========================================
        //
        // i = 0
        //
        // We start checking needle from
        // haystack index 0.
        //
        // haystack:
        // "s a d b u t s a d"
        //  ↑
        //  i = 0
        //
        // needle:
        // "s a d"
        //  ↑
        //  j = 0


        for(j = 0; j < m; j++) {

            // j = 0
            //
            // haystack[i + j]
            // = haystack[0 + 0]
            // = haystack[0]
            // = "s"
            //
            // needle[j]
            // = needle[0]
            // = "s"
            //
            // "s" === "s"
            // TRUE
            //
            // Continue


            // j = 1
            //
            // haystack[i + j]
            // = haystack[0 + 1]
            // = haystack[1]
            // = "a"
            //
            // needle[1]
            // = "a"
            //
            // "a" === "a"
            // TRUE
            //
            // Continue


            // j = 2
            //
            // haystack[i + j]
            // = haystack[0 + 2]
            // = haystack[2]
            // = "d"
            //
            // needle[2]
            // = "d"
            //
            // "d" === "d"
            // TRUE
            //
            // Continue
            

            if(haystack[i + j] !== needle[j]) {
                break;
            }
        }


        // After inner loop:
        //
        // j = 3
        // m = 3
        //
        // j == m
        //
        // 3 == 3
        // TRUE
        //
        // This means the complete needle
        // was found.
        //
        // return i
        //
        // return 0


        if(j == m) {
            return i;
        }
    }


    // If the needle is not found:
    //
    // return -1

    return -1;
};


// ==========================================
// FINAL ANSWER
// ==========================================
//
// haystack = "sadbutsad"
// needle   = "sad"
//
// "sad" starts at index 0.
//
// Therefore:
//
// return 0
//
//
// ==========================================
// TIME COMPLEXITY
// ==========================================
//
// Outer loop can run up to:
// O(n)
//
// Inner loop can run up to:
// O(m)
//
// Therefore:
//
// Time Complexity = O(n * m)
//
//
// ==========================================
// SPACE COMPLEXITY
// ==========================================
//
// We only use variables:
//
// n
// m
// i
// j
//
// No extra data structure is used.
//
// Therefore:
//
// Space Complexity = O(1)