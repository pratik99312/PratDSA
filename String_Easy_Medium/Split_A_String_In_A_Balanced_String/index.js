// Write a Program to Split A String in a balanced String

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let R = 0;
    let L = 0;
let count = 0;
    for(let i = 0; i < s.length ;i++){
        if(s[i] == "R"){
            ++R
        }else{
            ++L
        }

        if(R==L){
            ++count;
        }
    }
    return count;
};

const s = "RLRRRLLRLL"

//  const s = "RLRRLLRLRL"

console.log(balancedStringSplit(s)); 