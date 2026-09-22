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