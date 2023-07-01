//{ Driver Code Starts
//Initial Template for javascript to take input and process it

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.longestKSubstr(s, k);
    console.log(res);
  }
}

// } Driver Code Ends

/* ------------------------------------------------------------------------------------------  */

/* Length of longest substring */

//User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
  longestUniqueSubsttr(str) {
    //code here
    let memoizedObject = {};
    let length = 0;
    let longestLength = 0;
    let i;
    for (i = 0; i < str.length; i++) {
      if (typeof memoizedObject[str[i]] === "undefined") {
        memoizedObject[str[i]] = i;
        length++;
      } else {
        if (length > longestLength) {
          longestLength = length;
        }
        i = memoizedObject[str[i]];
        memoizedObject = {};
        length = 0;
      }
    }
    // To check if all the characters are unique or at the last of string we found all the unique characters
    if (length > longestLength) {
      longestLength = length;
    }
    return longestLength;
  }
}

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Length of Longest K unique characters substring (Solution - 1) */

/**
 * @class Solution
 * @param {string} s
 * @param {number} k
 * @describe This will create the sliding window by moving the index to the least recently used index in alphaStore when distinct chars increases k. But this is still not solving in O(n)
 * @returns {number} maxLength
 */

class Solution {
  alphaStore = {};
  longestKSubstr(s, k) {
    let kUniqueLength = 0;
    let kUniqueChar = 0;
    let length = 0;
    let longestLength = 0;
    let i = 0;

    for (; i < s.length; i++) {
      if (typeof this.alphaStore[s[i]] === "undefined" && kUniqueLength < k) {
        this.alphaStore[s[i]] = i;
        kUniqueLength++;
        length++;
      } else if (this.alphaStore[s[i]] || this.alphaStore[s[i]] === 0) {
        this.alphaStore[s[i]] = i;
        length++;
      } else {
        i = this.getMinIndex();
        kUniqueLength = 0;
        length = 0;
        this.alphaStore = {};
      }

      if (length > longestLength) {
        longestLength = length;
        kUniqueChar = kUniqueLength;
      }
    }

    return kUniqueChar === k ? longestLength : -1;
  }

  getMinIndex() {
    return Math.min.apply(this, Object.values(this.alphaStore));
  }
}

/* Length of Longest K unique characters substring (Solution - 2) */

/**
 * @class Solution
 * @param {string} s
 * @param {number} k
 * @describe This will create the sliding window by moving the startWindowIndex to the right when alphaMap contains the chars greater than k and endWindowIndex keep moving to the right till the end. So once the size of alphaMap and k are equale calculate the maxLength
 * @returns {number} maxLength
 */

class Solution {
    longestKSubstr(s, k) {
        let maxLength = -1;
        const alphaMap = new Map();
        let startWindowIndex = 0;
        let endWindowIndex = 0;
        
        for(;endWindowIndex < s.length; endWindowIndex++) {
            alphaMap.set(s[endWindowIndex], alphaMap.has(s[endWindowIndex]) ? alphaMap.get(s[endWindowIndex]) + 1 : 1);
            
            while(alphaMap.size > k) {
                alphaMap.set(s[startWindowIndex], alphaMap.get(s[startWindowIndex]) - 1);
                if (alphaMap.get(s[startWindowIndex]) === 0) { // When all the specific chars are removed from left window then remove it from alphaMap
                    alphaMap.delete(s[startWindowIndex]);
                }
                startWindowIndex++;
            }
            
            if (alphaMap.size === k) {
                maxLength = Math.max(maxLength, (endWindowIndex - startWindowIndex) + 1 );
            }
        }
        return maxLength;
    }
}

/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

