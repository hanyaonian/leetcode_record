/**
 * 
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
  计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

  你可以认为每种硬币的数量是无限的。

  示例 1：

  输入：coins = [1, 2, 5], amount = 11
  输出：3 
  解释：11 = 5 + 5 + 1
  示例 2：

  输入：coins = [2], amount = 3
  输出：-1
  示例 3：

  输入：coins = [1], amount = 0
  输出：0


  思路：寻找最优解

  1, 2, 5 -> 1 = 1
  1, 2, 5 -> 2 = 1
  1, 2, 5 -> 3 = r(2) + r(1) = 2

  // 找到规律
  1, 2, 5 -> 4 = r(3) + r(1) | r(2) + r(2) = 2 
 */

function coinChange(coins, amount) {
  if (amount === 0) {
    return 0;
  }
  const result_list = new Array(amount + 1).fill(0);
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (coin <= amount) {
      result_list[coin] = 1;
    }
  }
  for (let i = 0; i <= amount; i++) {
    const possible_res = coins
      .map((coin) => {
        const pre_result = result_list[i - coin];
        return pre_result;
      })
      .filter(Boolean);
    if (possible_res.length) {
      result_list[i] = Math.min(...possible_res) + 1;
    }
    if (coins.includes(i)) {
      result_list[i] = 1;
    }
  }
  return !result_list[amount] ? -1 : result_list[amount];
}

console.log(coinChange([1, 2, 5], 11)); //3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0

console.log(coinChange([1, 2], 2)); // 1
console.log(coinChange([1], 2)); // 2
