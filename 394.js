/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

    编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

    你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

    此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
    示例 1：

    输入：s = "3[a]2[bc]"
    输出："aaabcbc"
    示例 2：

    输入：s = "3[a2[c]]"
    输出："accaccacc"
    示例 3：

    输入：s = "2[abc]3[cd]ef"
    输出："abcabccdcdcdef"
    示例 4：

    输入：s = "abc3[cd]xyz"
    输出："abccdcdcdxyz"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/decode-string
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {string} s
 * @return {string}
 */
const isInt = (val) => {
    return Number.isInteger(Number(val));
}

var decodeString = function(s) {
    const numArr = []; //数字辅助栈
    const strArr = []; //计算栈
    let numStr = '';
    for (let i = 0; i < s.length; i++) {
        if (isInt(s[i])) {
            //记录多位数字
            numStr = numStr + s[i];
            continue;
        } else if (numStr) {
            //已有数字
            numArr.push(Number(numStr));
            numStr = '';
        }
        //括号入栈
        if (s[i] === '[') {
            strArr.push(s[i]);
        } else if (s[i] === ']') {
            //计算栈内的内容
            let str = '';
            let tempStr = '';
            let numTimes = numArr.pop();
            let temp = '';
            while(temp != '[') {
                str = temp + str;
                temp = strArr.pop();
            }
            for (let j = 0; j < numTimes; j++) {
                tempStr += str;
            }
            strArr.push(tempStr);
        } else {
            //普通字符，入栈（可能在括号内）
            strArr.push(s[i])
        }
    }
    return strArr.join('');
};
