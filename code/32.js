/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
	示例 1：
	输入：s = "(()"
	输出：2
	解释：最长有效括号子串是 "()"
	示例 2：
	输入：s = ")()())"
	输出：4
	解释：最长有效括号子串是 "()()"
	示例 3：
	输入：s = ""
	输出：0

	审题：格式正确且连续***
	解法：记录格式正确的括号下标，找出最长连续下标即可。
 * 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [], len = s.length, count = 0, ans = 0;
    let mark = new Array(len).fill(true);
    for (let i = 0; i < len; i++) {
        if (s[i] === '(') {
            // 记录左括号下标
            stack.push(i);
        } else {
            // 右括号
            if (stack.length === 0) {
                // 这个是无效的
                mark[i] = false;
            } else {
                // 匹配到了，弹出下标
                stack.pop();
            }
        }
    }
    while(stack.length > 0) {
        mark[stack.pop()] = false;
    }
    for (let i = 0; i < len; i ++) {
        if (mark[i]) {
            ans = Math.max(ans, ++count);
        } else {
            count = 0;
        }
    }
    return ans;
};
