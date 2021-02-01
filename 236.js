/**
 * 
 * LCA问题，easy
 * 
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

	百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || p === root || q === root) {
        return root;
    }
    let leftSearch = lowestCommonAncestor(root.left, p, q);
    let rightSearch = lowestCommonAncestor(root.right, p, q);
    if (leftSearch && rightSearch) {
        return root;
    } else if (leftSearch) {
        return leftSearch;
    } else if (rightSearch) {
        return rightSearch
    } else {
        return null;
    }
};