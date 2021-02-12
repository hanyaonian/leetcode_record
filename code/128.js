/**
 * 128. 最长连续序列
	给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
	进阶：你可以设计并实现时间复杂度为 O(n) 的解决方案吗？

	示例 1：
	输入：nums = [100,4,200,1,3,2]
	输出：4
	解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
	
	示例 2：
	输入：nums = [0,3,7,2,5,8,4,6,0,1]
	输出：9

	解法：看了题解想到了。看到时间复杂度O(n)要联想到通过set、map等数据结构来处理问题。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(), len = nums.length;
    for (let i = 0; i < len; i++) {
        numSet.add(nums[i]);
    }
    let max = 0;
    numSet.forEach(val => {
        let count = 1;
        // 序列的第一个
        if (!numSet.has(val - 1)) {
            while (numSet.has(val + 1)) {
                count += 1;
                val += 1;
            }
            max = Math.max(max, count);
        }
    })
    return max;
};