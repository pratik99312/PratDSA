// Write a program for Group Anagram approach better 

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    map ={}
    for(let i = 0; i < strs.length;i++){
        // create a key 
        let freqArr = Array(26).fill(0)
        let s = strs[i]
        for(let j = 0; j < s.length; j++){
            let index = s[j].charCodeAt()- "a".charCodeAt();
            ++freqArr[index]
        }

        let key = ""
        for(let k = 0;k < 26;k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        // fill the map

        if(!map[key]){
            map[key] = [s]
        }else{
            map[key].push(s)
        }
    }

    return [...Object.values(map)]
};

const strs = ["eat","tea","tan","ate","nat","bat"]

// const strs = [""]

// const strs = ["a"]
console.log(groupAnagrams(strs))