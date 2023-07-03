function countOfAllPossiblePair(N, a) {  
  const result = [];  
  for (let k = 1; k <= 20; k++) {
    let count = 0;  
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
          if (((a[i] ^ a[j]) % Math.pow(2, k-1)) === 0) {
              count++;
          }
      }
    }
    result.push(count);
  }
  return result;
}

console.log(countOfAllPossiblePair(5, [1,3,5,4,8]));
