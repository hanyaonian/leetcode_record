/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
进阶：
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 
示例 1:
输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]

 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 解法一：模拟队列移动
var rotate = function(nums, k) {
    let times = k % nums.length;
    while (times > 0) {
        nums.unshift(nums.pop());
        times -= 1;
    }
};
// 解法二：模拟新数组, 空间不正确
var rotate = function (nums, k) {
	let times = k % nums.length, arr = [];
	for (let i = 0; i < n; ++i) {
        arr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = arr[i];
    }
};

// 大神图解：
// nums = "----->-->"; k =3
// result = "-->----->";

// reverse "----->-->" we can get "<--<-----"
// reverse "<--" we can get "--><-----"
// reverse "<-----" we can get "-->----->"
// this visualization help me figure it out :)