// #122 Best time to buy and sell stock II
// Difficulty: Medium
// Runtime: 53ms - better than 72.5% JS users!!!

function maxProfit(prices) {
  let max = [];
  for (let i = 1; i < prices.length; i++) {
    let buy = prices[i - 1];
    if (prices[i] > buy) {
      max.push(prices[i] - buy);
    } else {
      buy = prices[i];
    }
  }
  if (max.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < max.length; i++) {
      sum += max[i];
    }
    console.log(sum);
    return sum;
  }
}

maxProfit([7, 4, 8, 9, 10, 1, 8]);
