/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

	你可以假设数组是非空的，并且给定的数组总是存在多数元素。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/majority-element
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let length = nums.length, numMap = new Map();
    for (let i = 0; i < length; i++) {
        let value = numMap.get(nums[i]) || 0;
        numMap.set(nums[i], value + 1);
        if (value + 1 >= length / 2) {
            return nums[i]
        }
    }
    return null;
};