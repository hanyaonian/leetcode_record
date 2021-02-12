/**
 * 
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

因为是有重复可能的，因此加入一个标记数组用于记录。

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
var permuteUnique = function(nums) {
    const unUniqueans = [];
    const ans = [];
    const ansSet = new Set();
    backTracking(nums, unUniqueans, []);
    unUniqueans.forEach(val => {
        const joinVal = val.join('');
        if (!ansSet.has(joinVal)) {
            ans.push(val);
            ansSet.add(joinVal);
        }
    })
    return ans;
};