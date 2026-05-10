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
