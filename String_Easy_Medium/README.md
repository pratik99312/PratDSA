# Strings in DSA (JavaScript)

Strings are sequences of characters stored in memory. In DSA, they are treated as **arrays of characters**, enabling powerful algorithms for searching, manipulation, and pattern matching.

---

## Key Properties

- **Immutable** in JS — operations return new strings
- **Zero-indexed** like arrays
- **Length** accessible via `.length`

---

## Theory & Algorithms

### 1. Reverse a String

**Theory:** Iterate from both ends or use built-in methods to reverse character order. Time: O(n), Space: O(n).

```js
function reverseString(s) {
  return s.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
```

---

### 2. Palindrome Check

**Theory:** A palindrome reads the same forwards and backwards. Compare character by character from both ends. Time: O(n), Space: O(1).

```js
function isPalindrome(s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

---

### 3. Anagram Check

**Theory:** Two strings are anagrams if they contain the same characters with the same frequencies. Sort both and compare, or use a frequency map. Time: O(n log n) for sort, O(n) for map.

```js
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const sort = s => s.toLowerCase().split('').sort().join('');
  return sort(s1) === sort(s2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
```

---

### 4. Character Frequency Counter

**Theory:** Use a HashMap to count occurrences of each character in O(n) time. Useful for anagram checks, finding duplicates, and more.

```js
function charFrequency(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log(charFrequency("banana"));
// { b: 1, a: 3, n: 2 }
```

---

### 5. Longest Substring Without Repeating Characters

**Theory:** Use the **Sliding Window** technique. Maintain a window `[left, right]` and expand right; when a duplicate is found, shrink from the left. Track max window size. Time: O(n), Space: O(n).

```js
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 → "abc"
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 → "wke"
```

---

### 6. First Non-Repeating Character

**Theory:** Build a frequency map in one pass, then scan the string again to find the first character with frequency 1. Time: O(n), Space: O(1).

```js
function firstNonRepeating(s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}

console.log(firstNonRepeating("leetcode")); // 0 → 'l'
console.log(firstNonRepeating("aabb"));     // -1
```

---

### 7. Check if String is a Rotation

**Theory:** String B is a rotation of A if B appears as a substring in A+A. Time: O(n), Space: O(n).

```js
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "abced")); // false
```

---

### 8. Count Vowels and Consonants

**Theory:** Iterate through the string and classify each character using a set lookup. Time: O(n).

```js
function countVowelsConsonants(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let vowelCount = 0, consonantCount = 0;

  for (let char of s.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      vowels.has(char) ? vowelCount++ : consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsConsonants("Hello World"));
// { vowels: 3, consonants: 7 }
```

---

## Common Patterns

| Pattern | Use Case | Time Complexity |
|---|---|---|
| **Two Pointers** | Palindrome, reverse in-place | O(n) |
| **Sliding Window** | Longest/shortest substring | O(n) |
| **HashMap / Freq Counter** | Anagrams, duplicates, frequency | O(n) |
| **Sorting** | Anagram check (simple approach) | O(n log n) |
| **Concatenation Trick** | Rotation check | O(n) |

---

## Useful Built-in JS String Methods

```js
"hello".split('')          // ['h','e','l','l','o']
"hello".includes("ell")    // true
"hello".indexOf("l")       // 2
"hello".slice(1, 3)        // "el"
"  hi  ".trim()            // "hi"
"abc".repeat(3)            // "abcabcabc"
"Hello".toLowerCase()      // "hello"
"Hello".toUpperCase()      // "HELLO"
"a,b,c".split(',')         // ['a', 'b', 'c']
['a','b','c'].join('-')     // "a-b-c"
```

---

## Time & Space Complexity Summary

| Algorithm | Time | Space |
|---|---|---|
| Reverse a String | O(n) | O(n) |
| Palindrome (Two Pointer) | O(n) | O(1) |
| Anagram Check (Sort) | O(n log n) | O(n) |
| Anagram Check (HashMap) | O(n) | O(n) |
| Char Frequency Counter | O(n) | O(n) |
| Longest Substring (Sliding Window) | O(n) | O(n) |
| First Non-Repeating Char | O(n) | O(n) |
| String Rotation Check | O(n) | O(n) |
