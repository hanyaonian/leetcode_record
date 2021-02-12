
/**
 * 
	给定一个 没有重复 数字的序列，返回其所有可能的全排列。

	示例:

	输入: [1,2,3]
	输出:
	[
	[1,2,3],
	[1,3,2],
	[2,1,3],
	[2,3,1],
	[3,1,2],
	[3,2,1]
	]

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/permutations
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
	
 *  回溯法。类似树形展开分开计算的思路
 */
/**
 * @param {number[]} nums 数字 
 * @param {boolean[]} mark 记录同位置数字是否使用
 * @param {number[][]} ans 答案记录
 * @param {number[]} current 函数环境下的计算结果
 * @return {number[][]}
 */
function backTracking(nums, ans, current) {
    if (current.length === nums.length) {
        ans.push([...current]);
        return;
    }
    // 优化：因为无重复，所以用index来找寻对应目标。无需多余内存进行标记
    for (let i = 0; i < nums.length; i++) {
        if (current.indexOf(nums[i]) === -1) {
            current.push(nums[i]);
            backTracking(nums, ans, current);
            current.pop();
        }
    }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    backTracking(nums, ans, []);
    return ans;
};