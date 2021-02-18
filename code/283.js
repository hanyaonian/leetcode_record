/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
	示例:
	输入: [0,1,0,3,12]
	输出: [1,3,12,0,0]

	解法：双指针覆盖，后续补0
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0, current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count += 1;
        } else {
            nums[current++] = nums[i];
        }
    }
    for (let i = 0; i < count; i++) {
        nums[nums.length - 1 - i] = 0
    }
};