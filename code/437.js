/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

map记录各个元素出现频次，排序

 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numMap = new Map(), len = nums.length;
    for (let i = 0; i < len; i++) {
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        } else {
            numMap.set(nums[i], 1);
        }
    }
    let ans = [];
    numMap.forEach((val, key) => {
        ans.push([val, key]);
    })
    ans.sort((pre, next) => next[0] - pre[0]);
    return ans.map(val => val[1]).slice(0, k);
};