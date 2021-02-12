/**
 * 
 * 递归或者DP，递归会爆栈，因此使用DP的方式去做。
 * 
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

	每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

	注意：给定 n 是一个正整数。

	示例 1：

	输入： 2
	输出： 2
	解释： 有两种方法可以爬到楼顶。
	1.  1 阶 + 1 阶
	2.  2 阶

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/climbing-stairs
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ans = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        ans[i] = ans[i-1] + ans[i-2];
    }
    return ans[n]
};