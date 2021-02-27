/**
 * 
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

解法：一开始是两层遍历找，用一个变量记上一个序列的节点来找最长，后面发现那样做不对，因为无法判断中间被忽略的节点是否长的子序列节点
正确解法：动态规划。某节点如果是最长子节点，那么其长度为上一个节点的长度+1，上一个节点的判断条件为 nums[i] < num[j]
所以有
if (num[i] < num[j])
ans[j] = Max- ans[i] + 1, ans[j] //其他节点的可能更长
 * 
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let ans = new Array(nums.length).fill(1), max = 1;
    for (let i = 0; i < nums.length; i++) {
        for(let j = i; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                ans[i] = Math.max(ans[j] + 1, ans[i]);
                max = Math.max(max, ans[i])
            }
        }
    }
    return max;
};