// Write a program to perform Insertion Sort in JavaScript

let arr = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function insertionSort(a) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = a[i];
    let prev = i - 1;

    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }

    a[prev + 1] = curr;
  }

  return arr;
}

const result = insertionSort(arr);

console.log("Insertion Sort Array is::", result);

// Dry Run
// arr = [7, 1, 5, 12, -10, 0, 4, 3, 2]
// i = 1, curr = 1, prev = 0, a[prev] > curr, a[prev + 1] = a[prev], prev--, a[prev + 1] = curr, arr = [1, 7, 5, 12, -10, 0, 4, 3, 2]
// i =2 , curr=5 , prev=1 , a[prev]>curr , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[1 ,5 ,7 ,12 ,-10 ,0 ,4 ,3 ,2]
// i =3 , curr=12 , prev=2 , a[prev]>curr false , no change arr=[1 ,5 ,7 ,12 ,-10 , 0 ,4 ,3 ,2]
// i =4 , curr=-10 , prev=3 , a[prev]>curr true , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[-10 ,1 ,5 ,7 ,12 ,0 ,4 ,3 ,2]
// i =5 , curr=0 , prev=4 , a[prev]>curr true , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[-10, 0, 1, 5, 7, 12, 4, 3, 2]
// i =6 , curr=4 , prev=5 , a[prev]>curr true , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[-10, 0, 1, 4, 5, 7, 12, 3, 2]
// i =7 , curr=3 , prev=6 , a[prev]>curr true , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[-10, 0, 1, 3, 4, 5, 7, 12, 2]
// i =8 , curr=2 , prev=7 , a[prev]>curr true , a[prev+1]=a[prev] , prev-- , a[prev+1]=curr , arr=[-10, 0, 1, 2, 3, 4, 5, 7, 12]

// So the final output will be Insertion Sort Array is:: [-10, 0, 1, 2, 3, 4, 5, 7, 12]

// This is the optimized solution with O(1) space complexity and O(n^2) time complexity.
