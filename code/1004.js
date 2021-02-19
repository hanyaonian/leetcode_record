/**
 * 给定一个由若干 0 和 1 组成的数组 A，我们最多可以将 K 个值从 0 变成 1 。
 * 返回仅包含 1 的最长（连续）子数组的长度。

	示例 1：
	输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
	输出：6
 * 
 * 解法：滑动窗口，记录可翻转的数字个数。
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let left = 0, right = 0, max = 0, count = K, len = A.length;
    while (right < A.length) {
        // 翻转一个
        if (A[right] === 0) {
            count -= 1;
        }
        // 可翻转的余额不足咯
        while(count < 0) {
            if (A[left] === 0) {
                left += 1;
                count += 1;
            } else {
                left ++;
            }
        }
        max = Math.max(max, right - left + 1);
        right += 1;
    }
    return max;
};