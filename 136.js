/**
 * 简单题，纯记录
 * 大佬都是用位运算做的。不太会。
 * 今天学到一个位运算取整的小技巧 ~~num -> num取整
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], ((numMap.get(nums[i]) || 0) + 1));
    }
    let ans;
    numMap.forEach((value, key) => {
        if (value === 1) {
            ans = key;
        }
    })
    return ans;
};