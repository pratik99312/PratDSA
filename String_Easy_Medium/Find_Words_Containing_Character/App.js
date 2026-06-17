// Write a Program to find the words in terms of index containing Character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res = [];
    for(let i = 0; i < words.length;i++){
        // find if char x is present in words[i]
    for(let j= 0;j < words[i].length;j++){
        if(words[i][j] == x){
            res.push(i);
            break
        }
    }


        // if(words[i].includes(x)){
        //     res.push(i)
        // }
    }
    return res;
};

// m = no.of words
// n = max length of each word

// Time complexity = O(n*m)
// space = O(1)

const  words = ["leet","code"], x = "e";

// const words = ["abc","bcd","aaaa","cbc"], x = "a"

console.log(findWordsContaining(words,x))