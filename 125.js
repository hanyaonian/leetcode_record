/**
 * 就当自己练了一轮正则吧。easy
 * 
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

	说明：本题中，我们将空字符串定义为有效的回文串。

	示例 1:

	输入: "A man, a plan, a canal: Panama"
	输出: true
	示例 2:

	输入: "race a car"
	输出: false
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[\s,:@#\\\(\);:`~.'"\?\]\[\{\}&_\-\=\+\^%!\*]/g, '').toLowerCase();
    let lmid = ~~(str.length / 2), rmid = lmid;
    if (str.length % 2 === 0) {
        lmid -= 1;
    }
    while (lmid >= 0 && rmid < str.length) {
        if (str[lmid] !== str[rmid]) {
            return false;
        }
        lmid -= 1;
        rmid += 1;
    }
    return true;
};