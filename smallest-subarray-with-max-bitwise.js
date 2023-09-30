/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestSubarrays = function (nums) {
  const minSizeArray = [];

  function getBitWiseOr(num1, num2) {
    return num1 | num2;
  }

  for (let i = 0; i < nums.length; i++) {
    let maxBitWiseOr = nums[i];
    let minSize = 1;
    for (let j = i + 1; j < nums.length; j++) {
      const bitWise = getBitWiseOr(maxBitWiseOr, nums[j]);
      if (bitWise > maxBitWiseOr) {
        maxBitWiseOr = bitWise;
        minSize = j - i + 1;
      }
    }
    minSizeArray.push(minSize);
  }
  return minSizeArray;
};
