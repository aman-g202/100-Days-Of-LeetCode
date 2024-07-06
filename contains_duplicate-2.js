/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numsMap = {}
    let containsDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        if (!numsMap[nums[i]] && numsMap[nums[i]] !== 0) {
            numsMap[nums[i]] = i
        } else {
            if (Math.abs(numsMap[nums[i]] - i) <= k) {
                containsDuplicate = true;
                break;
            } else {
                numsMap[nums[i]] = i
            }
        }
    }
    return containsDuplicate;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,3,2,1,2,3], 2))