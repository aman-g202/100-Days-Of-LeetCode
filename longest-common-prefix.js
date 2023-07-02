/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let lcp = '';
    let commonChar;
    let flag;
    for (let i = 0; i < 200; i++) {
        if (!strs[0][i]) {
            break;
        }
        commonChar = strs[0][i];
        flag = true;
        for (let j = 1; j < strs.length; j++) {
            if(!strs[j][i] || strs[j][i] !== commonChar) {
                flag = false;
                break;
            }
        }

        if (flag) {
            lcp += commonChar;
        } else {
            break;
        }
    }
    return lcp;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
