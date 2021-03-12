/**
 * 序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。
给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。
每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。

解法：这题说是树，倒不如说是字符串处理
因为每有连续两个空指针，说明处于叶子节点，可以将叶子结点替换为空节点（类似字符串入栈消消乐那题），最终得到一个空节点
 * 
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let stack = [];
    let pre = preorder.split(',');
    for (let i = 0; i < pre.length; i ++) {
        stack.push(pre[i]);
        while (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#') {
            // 叶子节点替换成空节点
            stack.pop();
			stack.pop();
			// 空节点有子节点，不成立
            if (stack[stack.length - 1] === '#' || stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
            stack.push('#');
        }
    }
    // 最终是空节点
    return stack.length === 1 && stack[0] === '#';
};