/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
	示例 1：
	输入：x = 2.00000, n = 10
	输出：1024.00000
	示例 2：
	输入：x = 2.10000, n = 3
	输出：9.26100
	示例 3：
	输入：x = 2.00000, n = -2
	输出：0.25000
	解释：2-2 = 1/22 = 1/4 = 0.25

 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let ans = 1;
    let absN = Math.abs(n);
    while (absN > 0) {
        // 10 = 1010=
        // 1010 = pow(2, 1) pow(2, 3)
        // 为1的位置，需要乘x的该pow(2, index)次方
        // 每进一位，x次幂翻倍
        if (absN % 2 === 1) {
            ans = ans * x;
        }
        x = x * x;
        absN = ~~(absN / 2);
    }
    return n < 0 ? (1 / ans) : ans;
};