function calPoints(ops) {
  const finalRecords = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
        finalRecords.pop();
    } else if (ops[i] === "D") {
        finalRecords.push(finalRecords[finalRecords.length - 1] * 2);
    } else if (ops[i] === "+") {
        finalRecords.push(finalRecords[finalRecords.length - 1] + finalRecords[finalRecords.length - 2]);
    } else {
        finalRecords.push(Number(ops[i]));
    }
  }

  sum = finalRecords.reduce((prev, curr) => {
      return prev + curr;
  }, 0);

  return sum;
}

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1"]));
