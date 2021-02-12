/**
 * 
 * ps: 这题没懂想做什么。似乎使用二分法解决是标准解法
 * 
 * 给你一个整数数组 nums ，和一个整数 target 。

	该整数数组原本是按升序排列，但输入时在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。

	请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

	 
	示例 1：

	输入：nums = [4,5,6,7,0,1,2], target = 0
	输出：4

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return nums.findIndex(num => num === target);
}