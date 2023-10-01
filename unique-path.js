/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description Dynamic Programming Approach
 * @description Slowest approach uses both space O(m x n) and time space O(m x n)
 */
var uniquePaths = function (m, n) {
  const grid = new Array(m).fill(null).map((item) => new Array(n).fill(null));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (i - 1 === 0) {
        grid[i - 1][j] = 1;
      }
      if (j - 1 === 0) {
        grid[i][j - 1] = 1;
      }
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1] ? grid[m - 1][n - 1] : 1;
};

const factMemoize = {};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description Mathematical Approach using combinations
 * @description 1st Best approach optimized space and time
 */
var uniquePath2 = function (m, n) {
  return getFactorial(m + n - 2) / (getFactorial(m - 1) * getFactorial(n - 1));
};

function getFactorial(n) {
  if (factMemoize[n]) {
    return factMemoize[n];
  }
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  factMemoize[n] = fact;
  return fact;
}

(function prepareFactorials() {
  factMemoize[0] = 1;
  for (let i = 1; i <= 198; i++) {
    factMemoize[i] = factMemoize[i - 1] * i;
  }
})();

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * @description Mathematical Approach using combinations and precomputation of factorials
 * @description 2nd approach less optimal then first
 */
var uniquePath3 = function (m, n) {
  return factMemoize[m + n - 2] / (factMemoize[m - 1] * factMemoize[n - 1]);
};

console.log("Approach - 1 : ", uniquePaths(3, 2));
console.log("Approach - 1 : ", uniquePaths(3, 7));
console.log("Approach - 1 : ", uniquePaths(1, 2));
console.log("Approach - 2 : ", uniquePath2(3, 2));
console.log("Approach - 2 : ", uniquePath2(3, 7));
console.log("Approach - 2 : ", uniquePath2(1, 2));
console.log("Approach - 3 : ", uniquePath3(3, 2));
console.log("Approach - 3 : ", uniquePath3(3, 7));
console.log("Approach - 3 : ", uniquePath3(1, 2));
