/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。
	你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

	示例 1：
	输入：[1, 2, 2, 3, 1]
	输出：2
	解释：
	输入数组的度是2，因为元素1和2的出现频数最大，均为2.
	连续子数组里面拥有相同度的有如下所示:
	[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
	最短连续子数组[2, 2]的长度为2，所以返回2.

	解法：找到最小的度的数字区间即可。

 */
var findShortestSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let numMap = new Map(), len = nums.length, max = 0;
    for (let i = 0; i < len; i++) {
        let val = numMap.get(nums[i]);
        if (val !== undefined) {
            val.push(i);
            max = Math.max(val.length, max);
        } else {
            numMap.set(nums[i], [i]);
            max = Math.max(1, max);
        }
    }
    let min = Infinity;
    numMap.forEach((val, key) => {
        if (val.length === max) {
            // 最短子数组长度
            min = Math.min(min, val[val.length - 1] - val[0] + 1);
        }
    })
    return min;
};