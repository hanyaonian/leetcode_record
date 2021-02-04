/**41. 缺失的第一个正数
	给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

	进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？

	示例 1：
	输入：nums = [1,2,0]
	输出：3

	示例 2：
	输入：nums = [3,4,-1,1]
	输出：2

	示例 3：
	输入：nums = [7,8,9,11,12]
	输出：1

	解法：不会，看了题解才知道原地哈希这个说法。但这题是通过换位来做的，将数组换位来得到顺序序列。这题有点难啊。。。
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 空间复杂度不符合要求
    // let ans = [1], len = nums.length, numSet = new Set(), max = 0;
    // for (let i = 0; i < len; i++) {
    //     numSet.add(nums[i]);
    //     max = Math.max(max, nums[i]);
    // }
    // for (let i = 1; i <= max; i++) {
    //     if (!numSet.has(i)) {
    //         return i;
    //     }
    // }
    // return max + 1;
    let len = nums.length;
    for (let i = 0; i < len; i ++) {
        //不存在在重复值占有	nums[nums[i] - 1] != nums[i] 的时候才进行交换
        while (nums[i] <= len && nums[i] > 0 && nums[nums[i] - 1] != nums[i]) {
            swap(nums, i, nums[i] - 1);
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}