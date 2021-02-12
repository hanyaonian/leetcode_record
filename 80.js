/**
 * 
	给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
	不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
	输入：nums = [1,1,1,2,2,3]
	输出：5, nums = [1,1,2,2,3]

	解法：快慢指针覆盖，慢指针位置的slice就是减少数字后的数组

 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current = 0, len = nums.length, count = 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            count += 1;
            if (count <= 2) {
               nums[++current] = nums[i];
            }
        } else {
            nums[++current] = nums[i];
            count = 1;
        }
    }
    return current + 1;
};