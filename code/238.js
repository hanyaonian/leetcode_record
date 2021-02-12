/**
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

	注：禁止使用除法。

	解法：左侧所有数字的乘积和右侧所有数字的乘积（即前缀与后缀）相乘得到答案

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/product-of-array-except-self
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let right = new Array(nums.length).fill(1);
	let left = new Array(nums.length).fill(1);
	// 左右写反了。这里应该是获取到i左侧的所有乘积
    for (let i = 1; i < right.length; i++) {
        right[i] = right[i - 1] * nums[i - 1];
	}
	// 左右写反了。这里应该是获取到i右侧的所有乘积
    for (let i = left.length - 2; i >= 0; i--) {
        left[i] = left[i + 1] * nums[i + 1];
    }
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(left[i] * right[i]);
    }
    return ans;
};