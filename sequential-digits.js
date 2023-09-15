/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const sortedSequentialDigits = [];

  const highStr = high.toString();
  const highLen = highStr.length;

  for (let start = 1; start < 9; start++) {
    let num = start;
    let length = 1;
    while (length < highLen && num % 10 !== 9) {
      num = num * 10 + ((num % 10) + 1);
      if (num >= low && num <= high) {
        sortedSequentialDigits.push(num);
      }
      length++;
    }
  }

  return sortedSequentialDigits.sort((a, b) => a - b);
};

// /**
//  * @param {number} low
//  * @param {number} high
//  * @return {number[]}
//  * This solution exceeded TLE
//  */
// var sequentialDigits = function (low, high) {
//   const sortedSequentialDigits = [];
//   for (let num = low; num <= high; num++) {
//     if (
//       isSequentialDigit(
//         Math.floor(num / 10),
//         num % 10,
//         1,
//         num.toString().length
//       )
//     ) {
//       sortedSequentialDigits.push(num);
//     }
//   }
//   return sortedSequentialDigits;
// };

// function isSequentialDigit(number, remainder, count, length) {
//   if (number % 10 === 0 && count === length) {
//     return true;
//   } else if (number % 10 === remainder - 1) {
//     return isSequentialDigit(
//       Math.floor(number / 10),
//       number % 10,
//       ++count,
//       length
//     );
//   } else {
//     return false;
//   }
// }
