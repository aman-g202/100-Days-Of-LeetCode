/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let flag;
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        flag = s[i];
        s[i] = s[j];
        s[j] = flag;
    }
    console.log(s);
};

reverseString(["H","a","n","n","a","h"])