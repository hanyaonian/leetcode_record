/**
 * 给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。

	进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？

	进阶不会。解法：先中序恢复成升序数列，然后再找出不对的节点。

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let midArr = getTreeArr(root);
    let fi = null, si = null;
    for (let i = 0; i < midArr.length - 1; i++) {
        if (midArr[i].val > midArr[i + 1].val) {
            // 如果有一个降序对，说明该两个node需交换；
            // 若有两个降序对，说明第一对的前一个node和第二对的后一个node需要交换。
            if (!fi) {
                fi = midArr[i];
                si = midArr[i + 1]
            } else {
                si = midArr[i + 1]
            }
        }
    }
    let temp = fi.val;
    fi.val = si.val;
    si.val = temp;
};

function getTreeArr(root) {
    if (!root) {
        return []
    }
    return [
        ...getTreeArr(root.left),
        root,
        ...getTreeArr(root.right)
    ]
}