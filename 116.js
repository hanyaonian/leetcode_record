/**
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
    初始状态下，所有 next 指针都被设置为 NULL。

    进阶：

    你只能使用常量级额外空间。
    使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
    1 -> null
   2 -> 3 -> null 

*/

/**
 * 解法一
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root || !root.left) {
        return root;
    }
    root.left.next = root.right;
    // 存在右侧节点
    if (root.next) {
        root.right.next = root.next.left;
    }
    connect(root.left);
    connect(root.right);
    return root;
};
// 解法2
var connect = function (root) {
    if (!root) {
        return null;
    }
    setConnect(root, null);
    return root;
};

function setConnect(root, rightNode) {
    if (!root) {
        return null;
    }
    if (rightNode) {
        root.next = rightNode;
        setConnect(root.left, root.right);
        setConnect(root.right, rightNode.left)
    } else {
        root.next = null;
        setConnect(root.left, root.right);
        setConnect(root.right, null)
    }
}