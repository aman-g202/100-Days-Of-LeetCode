/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let reverseNumber = '';

    function reverseX(x) {
        if (x === 0) {
            return;
        }
        reverseNumber += x % 10;
        reverseX(Math.floor(x/10));
    }

    reverseX(x);
    if (Number(reverseNumber) === x) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
