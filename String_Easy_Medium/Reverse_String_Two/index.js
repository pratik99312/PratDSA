// Write a program to reverse String

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s= s.split("")

    for(x = 0;x < s.length; x=x+(2*k)){
      // Reverse a 1st K elements starting from x
      let n= k;
     let mid = Math.floor(n/2);
    for(let i = 0; i < mid;i++){
        let temp = s[x+i];
        s[x+i] = s[x+n-1-i];
        s[x+n-1-i] = temp;
    }
    }

    // reverse a String 

   
    return s.join("")
    }


// Time = O(n)
// Space = O(n) - Because you are creating an array

// const  s = "abcdefg"; 
// const k = 2;

 const s = "abcd";
  const k = 2


console.log(reverseStr(s,k))