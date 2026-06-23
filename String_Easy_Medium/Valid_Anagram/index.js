// Write a prgram to find the Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map = {}

    for(let i =0;i < s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else{
            ++map[s[i]]
        }
    }

    for(let i = 0; i< t.length;i++){
        if(!map[t[i]] || map[t[i]]< 0){
            return false
        }else{
            --map[t[i]]
        }
    }

    return true
};


// const  s = "anagram", t = "nagaram";

const s = "rat", t = "car"

console.log(isAnagram(s,t))