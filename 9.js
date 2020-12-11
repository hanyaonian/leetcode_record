/**
 * 简单题
 * 回文数：中心回溯可以解决
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numString = x.toString();
    let mid = parseInt(numString.length / 2);
    let left = numString.length % 2 === 0 ? mid - 1 : mid;
    let right = numString.length % 2 === 0 ? left + 1 : left;
    while (left >= 0) {
        if (numString[left] !== numString[right]) {
            return false;
        }
        left -= 1;
        right += 1;
        continue;
    }
    return true;
};