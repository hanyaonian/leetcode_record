/**
 * 给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

	说明：
	你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

	进阶：
	如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
	// 构建数组
	const arr = [];
    const setArray = (root) => {
        if (!root) {
            return;
        }
        setArray(root.left);
        arr.push(root.val);
        setArray(root.right);
    }
    setArray(root);
    return arr[k - 1]
};

var kthSmallest = function (root, k) {
	// 进阶
};