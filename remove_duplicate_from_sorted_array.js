// var removeDuplicates = function (nums) {
//   const modifiedNums = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] !== nums[i]) {
//       modifiedNums.push(nums[i]);
//     }
//   }

//   for (i = 0; i < modifiedNums.length; i++) {
//     nums[i] = modifiedNums[i];
//   }

//   for (i = modifiedNums.length; i < nums.length; i++) {
//     nums.pop(i);
//   }

//   return modifiedNums.length;
// };

var removeDuplicates = function (nums = []) {
  let swapPosition = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] != nums[i]) {
        nums[swapPosition] = nums[i];
        swapPosition++
    }
  }

  numberOfElementsToBePopped = nums.length - swapPosition;

  for (let index = 0; index < numberOfElementsToBePopped; index++) {
      nums.pop();
  }

  return nums.length;
};

// let nums = [-1, 0, 0, 0, 0, 3, 3, 4];
let nums = [-1, 0, 0, 0, 0, 3, 3, 4];

removeDuplicates(nums);
console.log(nums);
