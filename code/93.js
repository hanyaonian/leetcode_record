/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
	有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
	例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

	示例 1：
	输入：s = "25525511135"
	输出：["255.255.11.135","255.255.111.35"]

	解法：回溯
 * 
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const ans = [], current = [];
    if (s.length > 12 || s.length < 4) {
        return ans;
    }
    backTracking(ans, current, s);
    let a = new Set(ans.map(val => val.toString()));
    return Array.from(a).map(val => val.split(',').join('.'));
};

function backTracking(ans, current, str) {
    if (str.length === 0 && current.length < 4) {
        return;
    }
    if (current.length === 4 && str.length === 0) {
        ans.push([...current])
        return;
    }
    if ((current.length === 4 && str.length > 0) || current.length > 4) {
        return;
    }
    for (let i = 1; i <= 3; i++) {
        let ip = str.substring(0, i);
        if (!isValid(ip)) {
            continue;
        }
        current.push(ip);
        backTracking(ans, current, str.substring(i));
        current.pop();
    }
}

function isValid(num) {
    if (num.length > 1 && num[0] === '0') {
        return false
    }
    if (num > 255) {
        return false;
    }
    return true;
}