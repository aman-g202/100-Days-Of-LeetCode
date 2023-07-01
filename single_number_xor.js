/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    singleNumber ^= nums[i]
  }
  return singleNumber;
};

console.log(singleNumber([1]));
