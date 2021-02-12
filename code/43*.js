/**
 * 
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

	示例 1:

	输入: num1 = "2", num2 = "3"
	输出: "6"
	示例 2:

	输入: num1 = "123", num2 = "456"
	输出: "56088"

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/multiply-strings
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

	倒序计算

	multiply('523', '223');
	9 (6) [0, 0, 0, 0, 0, 9]
	6 (6) [0, 0, 0, 0, 6, 9]
	6 (6) [0, 0, 0, 6, 6, 9]
	12(6) [0, 0, 0, 7, 2, 9]
	11(6) [0, 0, 1, 1, 2, 9]
	5 (6) [0, 0, 5, 1, 2, 9]
	16(6) [0, 0, 6, 6, 2, 9]
	16(6) [0, 1, 6, 6, 2, 9]

 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    const l1 = num1.length, l2 = num2.length;
    const maxDigit = l1 + l2;
    const p = new Array(maxDigit).fill(0)
    for (let i = l1; i --; i > 0) {
        for (let j = l2; j--; j > 0) {
            let tmp = num1[i] * num2[j] + p[i + j + 1]
            p[i + j + 1] = tmp % 10
            p[i + j] += parseInt(tmp / 10)
        } 
    }
    while(p[0] === 0) {
        p.shift()
    }
    return p.join('')
};