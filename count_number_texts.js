/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (pressedKeys) {
  const mod = 1e9 + 7;

  function addCombinations(value1, value2) {
    return ((value1 % mod) + (value2 % mod)) % mod;
  }

  const stringLength = pressedKeys.length;
  const dpArray = new Array(stringLength + 1);
  dpArray[0] = 1;

  for (let i = 1; i <= stringLength; i++) {
    dpArray[i] = dpArray[i - 1] % mod;
    if (i - 2 >= 0 && pressedKeys[i - 1] === pressedKeys[i - 2]) {
      dpArray[i] = addCombinations(dpArray[i], dpArray[i - 2]);
      if (i - 3 >= 0 && pressedKeys[i - 2] === pressedKeys[i - 3]) {
        dpArray[i] = addCombinations(dpArray[i], dpArray[i - 3]);
        if (
          i - 4 >= 0 &&
          pressedKeys[i - 3] === pressedKeys[i - 4] &&
          (pressedKeys[i - 4] === "7" || pressedKeys[i - 4] === "9")
        ) {
          dpArray[i] = addCombinations(dpArray[i], dpArray[i - 4]);
        }
      }
    }
  }

  return dpArray[stringLength];
};

console.log(countTexts("22233"))
console.log(countTexts("222222222222222222222222222222222222"))
