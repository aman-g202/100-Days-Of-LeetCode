class SetOperations {
  static intersection(set1, set2) {
    const ans = new Set();
    for (let i of set2) {
      if (set1.has(i)) {
        ans.add(i);
      }
    }
    return ans;
  }

  static difference(set1, set2) {
    return new Set([...set1].filter((x) => !set2.has(x)));
  }

  static union(set1, set2) {
    return new Set([...set1, ...set2]); 
  }
}

module.exports = SetOperations
