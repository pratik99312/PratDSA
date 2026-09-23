/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = j = 0;
    while(j < t.length){
        if(s[i]==t[j]){
            i++
        }
        j++;
    }
    return i == s.length
};

// leetcode Q.no : 392 : Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {

    // Example:
    // s = "abc"
    // t = "ahbgdc"
    //
    // We need to check whether "abc"
    // appears in "ahbgdc" in the same order.
    //
    // Expected answer:
    // true


    let i = 0;
    let j = 0;

    // Initial values:
    //
    // i = 0
    // j = 0
    //
    // s = "abc"
    //      012
    //
    // t = "ahbgdc"
    //      012345


    while(j < t.length) {

        // ==========================================
        // ITERATION 1
        // ==========================================
        //
        // i = 0
        // j = 0
        //
        // s[i] = s[0] = "a"
        // t[j] = t[0] = "a"
        //
        // s[i] == t[j]
        // "a" == "a"
        // TRUE
        //
        // Therefore:
        // i++
        //
        // i = 1
        //
        // j++
        //
        // j = 1


        if(s[i] == t[j]) {
            i++;
        }

        j++;


        // ==========================================
        // ITERATION 2
        // ==========================================
        //
        // i = 1
        // j = 1
        //
        // s[i] = s[1] = "b"
        // t[j] = t[1] = "h"
        //
        // "b" == "h"
        // FALSE
        //
        // i does NOT change
        //
        // i = 1
        //
        // j++
        //
        // j = 2


        // ==========================================
        // ITERATION 3
        // ==========================================
        //
        // i = 1
        // j = 2
        //
        // s[i] = s[1] = "b"
        // t[j] = t[2] = "b"
        //
        // "b" == "b"
        // TRUE
        //
        // i++
        //
        // i = 2
        //
        // j++
        //
        // j = 3


        // ==========================================
        // ITERATION 4
        // ==========================================
        //
        // i = 2
        // j = 3
        //
        // s[i] = s[2] = "c"
        // t[j] = t[3] = "g"
        //
        // "c" == "g"
        // FALSE
        //
        // i = 2
        //
        // j++
        //
        // j = 4


        // ==========================================
        // ITERATION 5
        // ==========================================
        //
        // i = 2
        // j = 4
        //
        // s[i] = s[2] = "c"
        // t[j] = t[4] = "d"
        //
        // "c" == "d"
        // FALSE
        //
        // i = 2
        //
        // j++
        //
        // j = 5


        // ==========================================
        // ITERATION 6
        // ==========================================
        //
        // i = 2
        // j = 5
        //
        // s[i] = s[2] = "c"
        // t[j] = t[5] = "c"
        //
        // "c" == "c"
        // TRUE
        //
        // i++
        //
        // i = 3
        //
        // j++
        //
        // j = 6
    }


    // ==========================================
    // FINAL CHECK
    // ==========================================
    //
    // i = 3
    // s.length = 3
    //
    // i == s.length
    //
    // 3 == 3
    // TRUE
    //
    // Therefore:
    //
    // return true


    return i == s.length;
};


// ==========================================
// TIME COMPLEXITY
// ==========================================
//
// We traverse string t once.
//
// while loop runs at most t.length times.
//
// Therefore:
//
// Time Complexity = O(n)
//
// where n = length of t.
//
// More precisely:
// O(t.length)


// ==========================================
// SPACE COMPLEXITY
// ==========================================
//
// We only use two variables:
//
// i
// j
//
// No extra data structure is used.
//
// Therefore:
//
// Space Complexity = O(1)