/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const intersectArray = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  while (nums2Pointer < nums2.length && nums1Pointer < nums1.length) {
    if (nums1[nums1Pointer] == nums2[nums2Pointer]) {
      intersectArray.push(nums1[nums1Pointer]);
      nums1Pointer++;
      nums2Pointer++;
    } else if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
      nums1Pointer++;
    } else {
      nums2Pointer++;
    }
  }
  return intersectArray;
};

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
var intersect = function (nums1, nums2) {
  let hash1 = {};
  let hash2 = {};
  let result = [];

  // Count frequency of elements in nums1 and nums2
  for (let num of nums1) {
    hash1[num] = (hash1[num] || 0) + 1;
  }
  for (let num of nums2) {
    hash2[num] = (hash2[num] || 0) + 1;
  }

  // Find intersection of nums1 and nums2 while maintaining frequency count
  for (let key in hash1) {
    if (hash2.hasOwnProperty(key)) {
      result = result.concat(
        Array(Math.min(hash1[key], hash2[key])).fill(parseInt(key))
      );
    }
  }

  return result;
};

console.log(
  intersect(
    [
      61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12,
      86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30,
      67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4,
      63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81,
      88, 60, 10, 55, 66, 82, 0, 79, 11, 81,
    ],
    [
      5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92,
      84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
    ]
  )
);
