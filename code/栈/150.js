/**
 * 根据 逆波兰表示法，求表达式的值。
有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
说明：
整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

示例 1：
输入：tokens = ["2","1","+","3","*"]
输出：9
解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9

 * 数字记录栈即可。
 * 
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const numStack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            // 数字
            numStack.push(tokens[i]);
        } else {
            let next = numStack.pop();
            let pre = numStack.pop();
            numStack.push(compute(tokens[i], pre, next));
        }
    }
    return numStack.pop();
};

function compute(op, a, b) {
    switch (op) {
        case '+': {
            return Number(a) + Number(b);
        }
        case '-': {
            return Number(a) - Number(b);
        }
        case '*': {
            return ~~(Number(a) * Number(b));
        }
        case '/': {
            return ~~(Number(a) / Number(b));
        }
    }
}