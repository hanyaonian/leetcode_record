/**
 *  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

	给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母
 * 

	回溯-》匹配所有结果
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const ans = [];
    const keyMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    backTrace(0, keyMap, ans, '', digits);
    if (!digits.length) {
        return []
    }
    return ans;
};

function backTrace(current, keymap, ans, str, digits) {
    if (current === digits.length) {
        ans.push(str);
    } else {
        let possibleInput = keymap[digits[current]];
        for (let i = 0; i < possibleInput.length; i++) {
            backTrace(current + 1, keymap, ans, str + possibleInput[i], digits);
        }
    }
}