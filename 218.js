/**

    给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
    easy
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if ( n === 0) {
        return false;
    }
    while (Number.isInteger(n / 2)) {
        n = n / 2;
    }
    return n === 1;
};
