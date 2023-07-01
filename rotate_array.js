/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === nums.length) {
    // If k is same, then rotation will not make any change
  } else {
    if (k > nums.length) {
      // If k is greater, then till division of nums.length it won't make any changes then rotate it by remaining remainder
      k = k % nums.length;
    }
    reverseSubArray(nums, nums.length - k, nums.length - 1); // Reverse sub array right
    reverseSubArray(nums, 0, nums.length - k - 1); // Reverse sub array left
    reverseSubArray(nums, 0, nums.length - 1); // // Reverse whole array
  }
};

/**
 * @param {number[]} nums
 * @param {number} startIndex
 * @param {number} endIndex
 * @return {void} Do not return anything
 * */

var reverseSubArray = function (nums, startIndex, endIndex) {
  const midPoint = Math.floor((startIndex + endIndex) / 2);
  const iterativeLimit =
    (endIndex - startIndex + 1) % 2 === 0 ? midPoint + 1 : midPoint;
  let temp;
  let j = 0;
  for (let i = startIndex; i < iterativeLimit; i++) {
    temp = nums[i];
    nums[i] = nums[endIndex - j];
    nums[endIndex - j] = temp;
    j++;
  }
};

const nums = [1, 2, 3];
rotate(nums, 5);
console.log(nums);
