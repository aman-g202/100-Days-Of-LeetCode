/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsHashMap = new Map();
    let twoElementsIndex;

    for (let i = 0; i < nums.length; i++) {
        if (numsHashMap.get(nums[i])) {
            const element = numsHashMap.get(nums[i]);
            numsHashMap.set(nums[i], [element[0], i]);
        } else {
            numsHashMap.set(nums[i], [i, null]);
        }
    }

    for (let j = 0; j < nums.length; j++) {
        const index = numsHashMap.get(target-nums[j]);
        if (index !== undefined) {
            if (target-nums[j] === nums[j]) {
                if (index[1] !== null) {
                    twoElementsIndex = [j, index[1]];
                    break;
                }
            } else {
                twoElementsIndex = [j, index[0]];
                break;
            }
        }
    }

    return twoElementsIndex;
};

console.log(twoSum([3,2,4], 6));
