/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // https://github.com/hanyaonian/interview/blob/main/algorithm/quicksort.ts
	// 1. 库函数
	// 2. 快排部分法
    return nums.sort((pre, next)=> pre - next).reverse()[k - 1];
};