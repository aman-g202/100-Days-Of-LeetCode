/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        number += 4;
        i++;
      } else if (s[i + 1] === "X") {
        number += 9;
        i++;
      } else {
        number += 1;
      }
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        number += 40;
        i++;
      } else if (s[i + 1] === "C") {
        number += 90;
        i++;
      } else {
        number += 10;
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        number += 400;
        i++;
      } else if (s[i + 1] === "M") {
        number += 900;
        i++;
      } else {
        number += 100;
      }
    } else {
        number += romanToNumberMap[s[i]];
    }
  }

  return number;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
