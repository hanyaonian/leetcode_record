/**
 * 
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

	candidates 中的数字可以无限制重复被选取。

	说明：

	所有数字（包括 target）都是正整数。
	解集不能包含重复的组合。 
	示例 1：

	输入：candidates = [2,3,6,7], target = 7,
	所求解集为：
	[
	[7],
	[2,2,3]
	]
	示例 2：

	输入：candidates = [2,3,5], target = 8,
	所求解集为：
	[
	  [2,2,2,2],
	  [2,3,3],
	  [3,5]
	]

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/combination-sum
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = [];
    const getCombination = (target, current,index) => {
        if (index >= candidates.length || target < 0) {
            return ;
        }
        if (target === 0) {
            ans.push(current)
		} else {
			// 因为是无重复 所以每种只试一次
			// 如果是所有组合 循环调用
            getCombination(target - candidates[index], [...current, candidates[index]], index);
            getCombination(target, current, index + 1);
        }
    }
    getCombination(target, [], 0);
    return ans;
};
