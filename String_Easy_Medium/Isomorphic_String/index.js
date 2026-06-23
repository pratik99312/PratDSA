// Write a program for Isomorphic String

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapStoT = {}
    let mapTtoS = {}


    for(let i = 0; i < s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i]
            mapTtoS[t[i]] = s[i]
        }else if( mapTtoS[t[i]] !== s[i]){
            return false;
        }else if(mapStoT[s[i]] !== t[i]){
            return false;
        }
    }
    return true
};

// const  s = "egg", t = "add"

// const s = "f11", t = "b23"

const s = 'paper', t = "title"


console.log(isIsomorphic(s,t));