/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。

	解法：替掉它前面的兄弟。如果为最后一个，为空即可。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
    } else {
        node = null;
    }
};