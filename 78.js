/**
 * 
 * 给你一个整数数组 nums ，返回该数组所有可能的子集（幂集）。解集不能包含重复的子集。

 
	示例 1：

	输入：nums = [1,2,3]
	输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
	示例 2：

	输入：nums = [0]
	输出：[[],[0]]

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/subsets
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [[]];
    for (let i = 0; i < nums.length; i ++) {
        let currentAnsLength = ans.length;
        for (let j = 0; j < currentAnsLength; j ++) {
            ans.push([...ans[j], nums[i]]);
        }
    }
    return ans;
};

