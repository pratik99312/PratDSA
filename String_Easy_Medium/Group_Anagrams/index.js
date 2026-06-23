// Write a program for Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for(let i = 0; i <strs.length;i++){
       let sortedStr = strs[i].split("").sort().join("")
       if(!map[sortedStr]){
        map[sortedStr] = [strs[i]]
       }else{
        map[sortedStr].push((strs[i]))
       }
    }
    return [...Object.values(map)]
};


const strs = ["eat","tea","tan","ate","nat","bat"]

// const strs = [""]

// const strs = ["a"]
console.log(groupAnagrams(strs))