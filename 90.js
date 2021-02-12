/**
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
	说明：解集不能包含重复的子集。
	示例:
	输入: [1,2,2]
	输出:
	[
	[2],
	[1],
	[1,2,2],
	[2,2],
	[1,2],
	[]
	]

 * 解法：回溯+剪枝，因为重复数字的位置不准确，需要先进行排序，排序之后将重复数字的组合剪枝掉
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let current = [], ans = [];
    nums.sort((pre, next)=> pre -next);
    backTracking(current, 0, ans, nums);
    return ans;
};

function backTracking(current, curr, ans, nums) {
    let len = nums.length;
    ans.push([...current]);
    for (let i = curr; i < len; i++) {
        // 去重条件
        if (nums[i - 1] === nums[i] && i - 1 >= curr) {
            continue;
        }
        current.push(nums[i]);
        backTracking(current, i + 1, ans, nums);
        current.pop();
    }
}