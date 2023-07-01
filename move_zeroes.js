/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let swapHelper;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] !== 0) {
      swapHelper = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = swapHelper;

      for (let j = i; j >= 0; j--) {
        if (nums[j - 1] === 0 && nums[j] !== 0) {
          swapHelper = nums[j];
          nums[j] = nums[j - 1];
          nums[j - 1] = swapHelper;
        }
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesOptimized = function (nums) {
  let zeroesCount = 0;
  let nonZeroPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[nonZeroPosition] = nums[i];
      nonZeroPosition++;
    } else {
      zeroesCount++;
    }
  }

  for (let i = nums.length - zeroesCount; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// const nums = [0, 0, 0, 1, 0, 4, 3, 12];
const nums = [0];
// moveZeroes(nums);
moveZeroesOptimized(nums);
console.log(nums);
