/**
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
	换句话说，第一个字符串的排列之一是第二个字符串的子串。
	示例1:
	输入: s1 = "ab" s2 = "eidbaooo"
	输出: True
	解释: s2 包含 s1 的排列之一 ("ba").
	示例 2：
	输入: s1= "ab" s2 = "eidboaoo"
	输出: False

	解法：排列的话，字母的种类个数是一致的，所以可以用滑动窗口+维护滑动窗口的字母map来进行比较，只要s1的字母map和
	滑动窗口的字母map内容一致，就可以排列出这些内容。
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0, right = s1.length - 1;
    let targetMap = new Map(), currentMap = new Map();
    // 设置两个map的初始状态。
    for (let i = 0; i < s1.length; i++) {
        let val = targetMap.get(s1[i]);
        let curr = currentMap.get(s2[i]);
        if (val) {
            targetMap.set(s1[i], val + 1);
        } else {
            targetMap.set(s1[i], 1);
        }
        if (curr) {
            currentMap.set(s2[i], curr + 1);
        } else {
            currentMap.set(s2[i], 1);
        }
    }
    while (right <= s2.length) {
        if (checkWordMap(targetMap, currentMap)) {
            return true;
        }
        // 更新map内容
        right += 1;
        if (currentMap.has(s2[right])) {
            currentMap.set(s2[right] ,currentMap.get(s2[right]) + 1);
        } else {
            currentMap.set(s2[right], 1);
        }
        currentMap.set(s2[left], currentMap.get(s2[left]) - 1);
        left += 1;
    }
    return false;
};

// 两个字母表个数是否一致。
function checkWordMap(m1, m2) {
    let same = true;
    m1.forEach((val, key)=> {
        if (val !== m2.get(key)) {
            same = false;
        }
    })
    return same;
}