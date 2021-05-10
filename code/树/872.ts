/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
    }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const findChild = (root: TreeNode, cache: number[]): void => {
        if (!root) {
            return;
        }
        if (root.left === null && root.right === null) {
            cache.push(root.val);
            return;
        }
        findChild(root.left, cache);
        findChild(root.right, cache);
    }
    const ans1 = [], ans2 = [];
    findChild(root1, ans1);
    findChild(root2, ans2);
    const len = Math.max(ans1.length, ans2.length);
    for (let i = 0; i < len; i++) {
        if (ans1[i] !== ans2[i]) {
            return false;
        }
    }
    return true;
};