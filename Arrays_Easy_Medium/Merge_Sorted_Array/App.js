/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log("Merged Array NEW:", nums1);

// dry run
// p1 = 2, p2 = 2
// i = 5, nums1[p1] = 3, nums2[p2] = 6, nums1[5] = 6, p2 = 1
// i = 4, nums1[p1] = 3, nums2[p2] = 5, nums1[4] = 5, p2 = 0
// i = 3, nums1[p1] = 3, nums2[p2] = 2, nums1[3] = 3, p1 = 1
// i = 2, nums1[p1] = 2, nums2[p2] = 2, nums1[2] = 2, p1 = 0
// i = 1, nums1[p1] = 1, nums2[p2] = 2, nums1[1] = 2, p2 = -1

// so the final result will be Merged Array NEW: [1, 2, 2, 3, 5, 6] 
// This is the optimized solution with O(1) space complexity and O(m+n) time complexity.
