/**
 * 
	给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。
	当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。
	请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。
	注意：不允许旋转信封。
	
	示例 1：
	输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
	输出：3
	解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
 * 
 * 解法：先排序，然后动态规划
 * dp[i] = max dp[j] + 1, dp[i]
 * j 是上一个套娃信封
 * 
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const len = envelopes.length;
    if (len === 0) {
        return 0;
    }
    envelopes.sort((pre, next) => {
        if (pre[0] !== next[0]) {
            return pre[0] - next[0]
        } else {
            return pre[1] - next[1]
        }
    })
    let max = 1;
    let ans = new Array(len).fill(1);
    for (let i = 1; i < len; i ++) {
        for (let j = 0; j < i; j ++) {
            if (envelopes[i][1] > envelopes[j][1] && envelopes[i][0] !== envelopes[j][0]) {
                ans[i] = Math.max(ans[j] + 1, ans[i])
            }
        }
        max = Math.max(max, ans[i]);
    }
    return max
};