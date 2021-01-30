/**
 * 
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径 至少包含一个 节点，且不一定经过根节点。

	路径和 是路径中各节点值的总和。

	给你一个二叉树的根节点 root ，返回其 最大路径和 。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/binary-tree-maximum-path-sum
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let ans = Number.MIN_SAFE_INTEGER;
    const getValueSum = (r) => {
        if (!r) {
            return 0;
        }
        const maxLeft = Math.max(0, getValueSum(r.left));
        const maxRight = Math.max(0, getValueSum(r.right));
        // 原本的思路是不对的，因为少了下面这两句。
        // 全部节点为负数的情况, r.val 是找到最小的负数节点
        //（left，right均不走取0，无r.val会取0不正确）。
        const all = maxLeft + maxRight + r.val; 
        ans = Math.max(all, ans);

        return r.val + Math.max(maxLeft, maxRight) ;
    }
    getValueSum(root);
    return ans;
};