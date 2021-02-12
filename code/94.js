/**
 * 
 * 解：数据结构基础，递归法和迭代法两种
 * 
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归法
var inorderTraversal = function(root) {
    if (!root) {
        return []
    }
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ]
};

//迭代法
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
	while (root || stack.length) {
		// 一路向左节点根走。
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};