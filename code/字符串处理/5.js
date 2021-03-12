/**
 * 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
 * 
 * @param {string} s
 * @return {string}
 */
//寻找某个子回文串
const findPalindrome = (str = '', head, tail)=> {
    let targetString = '';
    while (str[head] === str[tail] && tail < str.length) {
        if (head === tail) {
            //首次进入循环时，奇数的场景
            targetString = str[head];
        } else {
            //拼接回文串
            targetString = `${str[head]}${targetString}${str[tail]}`;
        }
        head -= 1;
        tail += 1;
    };
    return targetString;
}

var longestPalindrome = function(s) {
    if (!s) {
        return 0;
    }
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        //比较奇数回文串与偶数回文串的场景
        let str1 = findPalindrome(s, i, i);
        let str2 = findPalindrome(s, i, i + 1);
        let tempMax = str1.length > str2.length ? str1 : str2;
        //存留最长的回文串
        ans = ans.length >= tempMax.length ? ans : tempMax;
    }
    return ans;
};