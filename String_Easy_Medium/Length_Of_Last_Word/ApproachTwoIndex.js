// Write a program to find the length of the last word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;

    while(n>=0){
        if(s[n] != " "){
           ++count;
        }else if(count > 0){
        break;
    }
        --n;

    }
    return count
};


// let s = "luffy is still joyboy";
let s="   fly me   to   the sun  "

console.log(lengthOfLastWord(s));