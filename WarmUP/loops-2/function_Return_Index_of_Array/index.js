//  Write a function that searches for an element in an array and returns the index, if the element is not present than return -1

function searchElement(arr,x){
  for(let i = 0;i< arr.length;i++){
    if(arr[i]==x){
        return i;
    }
  }
  return -1;
}

const arr1 = [4,2,0,10,8,30];

const result = searchElement(arr1,10);

console.log("element in the array has index::"+result);

// dry run
// arr1 = [4,2,0,10,8,30], x = 10
// i = 0, arr1[i] = 4, not equal to x
// i = 1, arr1[i] = 2, not equal to x
// i = 2, arr1[i] = 0, not equal to x
// i = 3, arr1[i] = 10, equal to x, return index 3

// so the final result will be element in the array has index::3          

//  This is the optimized solution with O(1) space complexity and O(n) time complexity. 
