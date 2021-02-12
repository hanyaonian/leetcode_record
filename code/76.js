/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
	注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
	示例 1：
	输入：s = "ADOBECODEBANC", t = "ABC"
	输出："BANC"
	示例 2：
	输入：s = "a", t = "a"
	输出："a"

 * 
 * 解法1:
 * 滑动窗口，解法见注释
 * 
 * 解法2:
 * 记录每个需要的字母出现的位置，找最小公共区间
 * 623 题是这个问题一样的类型。
 * 
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 涵盖 t 所有字符的最小子串, 用set即可
    let matchSet = getStrChatMap(t);
    let miniGap = Infinity, window = [], len = s.length, left = 0, right = 0;
    let currentMap = new Map();
    currentMap.set(s[0], 1);
    // 滑动窗口
	while (right <= len && left <= right) {
		// 字符串符合条件，缩小窗口体积
        if (checkValid(matchSet, currentMap)) {
			let gap = right - left;
			// 记录最小窗口
            if (gap < miniGap) {
                window = [left, right];
                miniGap = gap;
            }
            // 移除一位, 因为记录过所以不需要管
            currentMap.set(s[left] ,currentMap.get(s[left]) - 1);
            left += 1;
		} else {
			// 不符合，扩大体积
            right += 1;
            if (currentMap.has(s[right])) {
                currentMap.set(s[right], currentMap.get(s[right]) + 1);
            } else {
                currentMap.set(s[right] , 1);
            }
        }
    }
    // 为何+1？截取mdn-endindex的解释：
    // 可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。
    return window.length ? s.substring(window[0], window[1] + 1) : "";
};

function getStrChatMap(t) {
    let matchSet = new Map();
    for (let i = 0; i < t.length; i++) {
        if (matchSet.has(t[i])) {
            matchSet.set(t[i], matchSet.get(t[i]) + 1);
        } else {
            matchSet.set(t[i], 1);
        }
    }
    return matchSet;
}

function checkValid(charSet, nSet) {
    let notExist = false
    charSet.forEach((val, key)=> {
        let targetVal = nSet.get(key) || 0;
        if (targetVal < val) {
            notExist = true;
        }
    })
    return !notExist;
}