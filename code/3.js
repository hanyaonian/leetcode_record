/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    // 无重复字符串窗框
    let queue = [];
    //记录最大数
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        //是否已存在，若已存在将重复前的字符串删掉
        let index = queue.findIndex(val => val === s[i]);
        if (index > -1) {
            //只保留非重复最右侧
            queue = queue.slice(index + 1, queue.length);
        }
        queue.push(s[i]);
        //找最大
        max = Math.max(max, queue.length)
    }
    return max;
};