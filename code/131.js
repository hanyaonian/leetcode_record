/**
 * 分割回文串
 * 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
	返回 s 所有可能的分割方案。

	示例:

	输入: "aab"
	输出:
	[
		["aa","b"],
		["a","a","b"]
	]
	解： 这种类似全排列的问题，都可以考虑回溯法。
 * 
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ans = [];
    backTracking([], ans, s);
    return ans;
};

function backTracking(current, ans, str) {
    if (!str) {
        // 相当于重新拷贝一个数组(str)。否则ans里都是空数组
        ans.push([...current]);
    }
    for (let i = 0; i < str.length; i++) {
        let sub = str.substr(0, i + 1);
        if (isPalindrome(sub)) {
            current.push(sub);
            backTracking(current, ans, str.replace(sub, ''));
            // 撤销操作
            current.pop();
        }
    }
}

function isPalindrome(str) {
    let i = 0, j = str.length - 1;
    while (i <= j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}