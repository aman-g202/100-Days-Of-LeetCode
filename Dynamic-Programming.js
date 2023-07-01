/* Length of longest palindromic subsequence */
/* Subsequence is string which can be formed by taking removing any chars in between without disturbing the sequence */

/* Approach - 1 : Bruteforce approach using recursion */

const s = "bbabcbcab";

function lPA(i, j) {
    if (i === j) {
        return 1;
    }
    if (i > j) {
        return 0;
    }

    if (s[i] === s[j]) {
        return 2 + lPA(i+1, j-1);
    } else {
        return Math.max(lPA(i + 1, j), lPA(i, j - 1));
    }
}

console.log(lPA(0,8)); // Complexity - O(2^n) because of recursion

/* Approach - 2 : Using dynamic programming because we know that there exists a overlapping subproblems so we will try to memoize it in 2d array by breaking the problem in to more sub problems */
/* Considering 1 char palidrome and then 2 char palindrome and then 3 char palindrome so on and so forth */

// const s = "bbabcbcab";

function lPA(S) {
    const dpArray = [...Array(S.length)].map(_ => Array(S.length));
    // for (let i = 0; i < s.length; i++) {
    //     dpArray[i][i] = 1;
    // }
    // for (let i = s.length - 2; i >= 0; i--) {
    //     for(let j = i + 1; j < s.length; j++) {
    //         if (s[i] === s[j]) {
    //             dpArray[i][j] = 2 + dpArray[i+1][j-1];
    //         } else {
    //             dpArray[i][j] = Math.max(dpArray[i][j-1], dpArray[i+1][j]);
    //         }
    //     }
    // }
    // for (let i = S.length - 1; i >= 0; i--) {
    //     dpArray[i][i] = 1;
    //     for (let j = i+1; j < S.length; j++) {
    //         if (S[i] == S[j]) {
    //             dpArray[i][j] = dpArray[i+1][j-1] + 2;
    //         } else {
    //             dpArray[i][j] = Math.max(dpArray[i+1][j], dpArray[i][j-1]);
    //         }
    //     }
    // }

    for (let i = 1; i <= S.length; i++) {
        for (let j = 0; j <= S.length - i; j++) {
            if (i === 1) { // For 1 char
                dpArray[j][j] = 1;
            } else if (i === 2) { // For 2 char
                if (S[j] === S[j+1]) {
                    dpArray[j][j+1] = 2;
                } else {
                    dpArray[j][j+1] = 1;
                }
            } else { // For 3,4,5...n char
                if (S[j] === S[j+i-1]) { // If its same then 2 + length of inbetween string
                    dpArray[j][j+i-1] = 2 + dpArray[j+1][j+i-2];
                } else { // Else max of removing 1-1 chars from left and right
                    dpArray[j][j+i-1] = Math.max(dpArray[j][j+i-2], dpArray[j+1][j+i-1]);
                }
            }
        }    
    }
    return dpArray[0][S.length - 1];
}

console.log(lPA(s)); // Complexity - O(n^2)