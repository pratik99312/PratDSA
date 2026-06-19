// Write a program to find Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let i = 0;
    let j = s.length -1

    while(i < j){
        if(!s[i].match(/[a-z0-9]/i)){
            ++i
        }
        else if(!s[j].match(/[a-z0-9]/i)){
            --j
        }
        else if(s[i]==s[j]){
            ++i ; --j;
        }else{
            return false
        }
    }
    return true
};

const s = "A man, a plan, a canal: Panama";

// const  s = "race a car";

console.log(isPalindrome(s))

// T = O(n)
// S = O(1)