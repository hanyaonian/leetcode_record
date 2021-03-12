/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：

输入：x = 123
输出：321

 * 
 * 简单题 in 腾讯练习50题
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numStr = x.toString();
    let numArr = [];
    for (let i = x < 0 ? 1 : 0; i < numStr.length; i++) {
        numArr.push(numStr[i]);
    }
    let reverseNum = Number(numArr.reverse().join(''));
    let answer = x < 0 ? reverseNum * -1 : reverseNum;
    if (answer > Math.pow(2, 31) - 1 || answer < -1 * Math.pow(2, 31)) {
        return 0;
    } else {
        return answer;
    }
};