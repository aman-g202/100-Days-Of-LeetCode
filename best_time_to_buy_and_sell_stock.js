/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = (profit = j = 0);
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      j = i;
      buyPrice = prices[i];
      while (prices[j + 1] > prices[j]) {
        j++;
      }
      profit += prices[j] - buyPrice;
      i = j;
    }
  }
  return profit;
};

const p = maxProfit([7,6,4,3,1]);
console.log(p);
