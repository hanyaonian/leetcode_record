/**
    输入两个值，在二叉搜索树中找最小的公共节点：
    利用左小右大特性进行递归即可，easy。

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
    let ans;
    // 哎我操node打成root了，提交出错这么多次
    const canIGetBoth = (node, min, max) => {
        if (!node) {
            return;
        }
        if (min === node.val || max === node.val) {
            ans = node;
        } else if (min < node.val && max > node.val) {
            ans = node;
        } else if (min < node.val && max < node.val) {
            canIGetBoth(node.left, min, max);
        } else if (min > node.val && max > node.val) {
            canIGetBoth(node.right, min, max);
        }
    }
    let a = p.val > q.val ? q : p;
    let b = p.val > q.val ? p : q;
    canIGetBoth(root, a.val, b.val)
    return ans;
};
