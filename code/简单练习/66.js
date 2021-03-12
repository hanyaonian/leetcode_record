/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 库函数解法: 不行，因为数字太大会超精度，这题是类似大数相加的解法
    // let num = Number(digits.join(''));
    // return (num + 1).toString().split('');
    digits[digits.length - 1] += 1;
    let tail = digits.length - 1;
    while (digits[tail] >= 10) {
        digits[tail] -= 10;
        if (tail === 0) {
            // 到头了
            digits.unshift(1);
        } else {
            digits[tail - 1] += 1;
        }
        tail -= 1;
    }
    return digits;
};