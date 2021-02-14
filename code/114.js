/**
 * 
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：

	展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
	展开后的单链表应该与二叉树 先序遍历 顺序相同。

	解法：先获取先序遍历的列表，然后再根据顺序链接

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
var flatten = function(root) {
    if (!root) {
        return null;
    }
    const arr = [];
    getPreorderTree(root, arr);
    for (let i = 0; i < arr.length; i ++) {
        arr[i].right = arr[i + 1] || null;
        arr[i].left = null;
    }
};

function getPreorderTree(root, arr) {
    if (!root) {
        return;
    }
    arr.push(root);
    getPreorderTree(root.left, arr);
    getPreorderTree(root.right, arr);
}