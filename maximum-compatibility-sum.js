/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
function maximumCompatibilitySum(students, mentors) {
  const m = mentors.length;
  const n = students[0].length;
  const dp = new Array(256).fill(0);

  function computeScore(i, j) {
    let score = 0;
    for (let k = 0; k < n; k++) {
      if (students[i][k] === mentors[j][k]) {
        score++;
      }
    }
    return score;
  }

  function backtrack(mask, i) {
    if (i === m) {
      return 0;
    }
    for (let j = 0; j < m; j++) {
      if ((mask & (1 << j)) === 0) {
        dp[mask] = Math.max(
          backtrack(mask | (1 << j), i + 1) + computeScore(i, j),
          dp[mask]
        );
      }
    }
    return dp[mask];
  }
  return backtrack(0, 0);
}

console.log(
  maximumCompatibilitySum(
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ]
  )
);

console.log(
  maximumCompatibilitySum(
    [
      [0, 0],
      [0, 0],
      [0, 0],
    ],
    [
      [1, 1],
      [1, 1],
      [1, 1],
    ]
  )
);

console.log(
  maximumCompatibilitySum(
    [
      [0, 0, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 1],
    ],
    [
      [1, 1, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1, 1],
      [1, 0, 1, 1, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
    ]
  )
);
