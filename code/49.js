/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
	示例:
	输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
	输出:
	[
		["ate","eat","tea"],
		["nat","tan"],
		["bat"]
	]

	解法：单词字母排序，再分组。

 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sortedStrs = strs.map(val => Array.from(val).sort().toString())
    let strMap = new Map(), len = strs.length;
    let group = 0, ans = []; // 分组
    for (let i = 0; i < len; i++) {
        let val = strMap.get(sortedStrs[i]);
        // 0也会识别为false，而group是0开始分的
        if (val === undefined) {
            strMap.set(sortedStrs[i], group);
            ans[group++] = [strs[i]]
        } else {
            // 已有对应分组
            ans[val].push(strs[i]);
        }
    }
    return ans;
};