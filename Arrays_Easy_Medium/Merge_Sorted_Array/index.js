/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let nums1Copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;

    for(let i = 0;i < m+n;i++){
        if(p2 >=n ||(p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }

    
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log("Merged Array:", nums1);

// dry run
// nums1Copy = [1, 2, 3], p1 = 0, p2 = 0
// i = 0, nums1Copy[p1] = 1, nums2[p2] = 2, nums1[0] = 1, p1 = 1
// i = 1, nums1Copy[p1] = 2, nums2[p2] = 2, nums1[1] = 2, p1 = 2
// i = 2, nums1Copy[p1] = 3, nums2[p2] = 2, nums1[2] = 2, p2 = 1
// i = 3, nums1Copy[p1] = 3, nums2[p2] = 5, nums1[3] = 3, p1 = 3
// i = 4, p1 >= m, nums1                [4] = 5, p2 = 2
// i = 5, p1 >= m, nums1                [5] = 6, p2 = 3

// so the final result will be Merged Array: [1, 2, 2, 3, 5, 6]                                                         
