// Write a program to find the length of the last word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // trim all the spaces at the end
    let n = s.length-1. // start from last character

    while(n>0){
        if(s[n] === " "){
            --n;
        }else{
            break;
        }
    }

    // n is the point where my last word starts

    // count the charater till you reach the space 

    let count = 0;
    while(n>=0){
  if(s[n] == " ") break;
  --n;
  ++count;


        // if(s[n] != " "){
        //     --n
        //     ++count;
        // }else{
        //     break;
        // }
    }
    return count
};

// let s = "luffy is still joyboy";
let s="   fly me   to   the moon  "

console.log(lengthOfLastWord(s));