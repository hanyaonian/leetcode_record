/**
 * 
 * 这题的解法是回溯，到第k个时返回结果，问题在于太慢：执行了2000ms。别人的答案在100ms内。mark一下重做，有时间时再写一次。
 * 
 * 给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。

    按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"
    给定 n 和 k，返回第 k 个排列。

    示例 1：

    输入：n = 3, k = 3
    输出："213"
    示例 2：

    输入：n = 4, k = 9
    输出："2314"
 * 
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let ans = [], arr = new Array(n).map((val, index)=> `${index + 1}`);
    let mark = new Array(n).fill(false);
    const backTrack = (current) => {
        if (ans.length === k) {
            return;
        }
        if (current.length === n) {
            // 全部已用
            ans.push(current);
            return;
        }
        for (let i = 0; i < n; i ++) {
            if (!mark[i]) {
                mark[i] = true;
                backTrack(`${current}${i + 1}`);
                mark[i] = false;
            }
        }
    }
    backTrack('');
    return ans[ans.length - 1];
};