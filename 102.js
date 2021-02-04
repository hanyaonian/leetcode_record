/**
 * 102. 二叉树的层序遍历
	给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

	一层层进，一层层出，联想先进先出，于是使用队列来解。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let nodeStack = [root], ansStack = [];
    let tempStack = [], tempAns = [];
    while (nodeStack.length) {
        let node = nodeStack.shift();
        if (!node) {
            continue;
        }
        if (node.left) {
            tempStack.push(node.left);
        }
        if (node.right) {
            tempStack.push(node.right);
        }
        tempAns.push(node.val);
        if (nodeStack.length === 0) {
            ansStack.push(tempAns);
            nodeStack = tempStack;
            tempStack = [];
            tempAns = [];
        }
    }
    return ansStack;
};