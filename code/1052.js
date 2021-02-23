/**
 * 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。
在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。
书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。
请你返回这一天营业下来，最多有多少客户能够感到满意的数量。

示例：
输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
输出：16
解释：
书店老板在最后 3 分钟保持冷静。
感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.

解法：x为滑动窗口大小，滑动窗口解决

 * 
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let left = 0, right = X-1, len = customers.length;
    let totalCustomer = 0, totalCost = 0;
    for (let i = 0; i < len; i ++) {
        if (grumpy[i] === 1) {
            totalCost += customers[i];
        } else {
            totalCustomer += customers[i];
        }
    }
    let current = 0, max = -Infinity;
    for (let i = 0; i < X; i++) {
        if (grumpy[i] === 1) {
            current += customers[i];
        }
    }
    while (right < len) {
        // 最大挽救的顾客
        max = Math.max(max, current);
        right += 1;
        if (grumpy[right] === 1) {
            current += customers[right];
        }
        if (grumpy[left] === 1) {
            current -= customers[left]
        }
        left += 1;
    }
    return totalCustomer + max;
};