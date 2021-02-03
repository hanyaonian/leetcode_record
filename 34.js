/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
	如果数组中不存在目标值 target，返回 [-1, -1]。
	进阶：
	你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

	解：此题用的进阶解法。可以想到用二分法，然后区分找最左与找最右。

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const findIndex = (nums, target, findLeft) => {
    // find left index
    let left = 0, right = nums.length, mid = ~~((left + right) / 2), ans = -1;
    while (left <= right) {
        if (nums[mid] === target) {
            ans = mid;
            // find most left of most right
            if (findLeft) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = ~~((left + right) / 2)
    }
    return ans;
}
var searchRange = function(nums, target) {
    return [findIndex(nums, target, true), findIndex(nums, target, false)];
};