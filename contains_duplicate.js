/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  let duplicate = false;
  for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i])) {
          duplicate = true;
          break;
      }
      map.set(nums[i], 1);
  }
  return duplicate;
};

console.log(containsDuplicate([-1,1,-1]));
