/**
 * 
 * 给定一个二叉树，找出其最小深度。
	最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
	说明：叶子节点是指没有子节点的节点。

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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let ans = 1;
    let queue = [root];
    let wailList = [];
    // 层序遍历改版
    while(queue.length) {
        const outNode = queue.pop();
        // 找到第一个叶子节点，最浅
        if (!outNode.left && !outNode.right) {
            return ans;
        }
        if (outNode.left) {
            wailList.push(outNode.left)
        }
        if (outNode.right) {
            wailList.push(outNode.right)
        }
        // 一层完了, 换下一层，最小层+=1;
        if (queue.length === 0) {
            ans += 1;
            queue = wailList;
            wailList = [];
        }
    }
    return ans;
};