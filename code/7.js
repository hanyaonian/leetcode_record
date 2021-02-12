/**
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