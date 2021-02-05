/**
 * 
 * 解法：构建二叉树累的题目，需要知道各种序列怎么来的。例如
 * 先序：[根节点，左子...，右子...]
 * 中序：[左子...，根节点，右子...]
 * 后序：[右子...，根节点，左子...]
 * 很容易写出合理的递归完整构造。
 * 
 * 根据一棵树的前序遍历与中序遍历构造二叉树。

	注意:
	你可以假设树中没有重复的元素。

	例如，给出

	前序遍历 preorder = [3,9,20,15,7]
	中序遍历 inorder = [9,3,15,20,7]

 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    let rootIndex = inorder.findIndex(val => val === preorder[0]);
    // 先序第一点是根节点
    let rnode = new TreeNode(preorder[0]);
    // 获取左子树（重新构建）, rootIndex 相当于length了
    rnode.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    // 获取右子树（重新构建）
    rnode.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return rnode
};