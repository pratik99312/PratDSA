/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0 ;
    for(let i = 0; i < nums.length;i++){
        if(nums[i] !== val){
            nums[x] = nums[i]
            x= x + 1;
        }
    }
    return x;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

const result = removeElement(nums, val);

console.log("Length:", result);
console.log("Modified Array:", nums);

