/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const stringMap = new Map();
    let firstUniqCharIndex = -1;

    for (let i = 0; i < s.length; i++) {
        if (stringMap.get(s[i]) !== undefined) {
            stringMap.set(s[i], -1);
        } else {
            stringMap.set(s[i], i);
        }
    }

    for (const iterator of stringMap) {
        if (iterator[1] !== -1) {
            firstUniqCharIndex = iterator[1];
            break;
        }
    }

    return firstUniqCharIndex;
};

console.log(firstUniqChar('aabb'));
