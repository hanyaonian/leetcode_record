/**
 * 	解法见备注。201是相关题
 * 
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

	说明:
	1 ≤ m ≤ n ≤ 链表长度。

	示例:

	输入: 1->2->3->4->5->NULL, m = 2, n = 4
	输出: 1->4->3->2->5->NULL

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head) {
        return null;
    }
    // 列表反转核心思想：
    // third = cur.next
    // cur.next = prev
    // prev = cur
    // cur = third
    let current = head, pre = null;
    for (let i = 1; i < m; i++) {
        pre = current;
        current = current.next;
    }
    let con = pre, tail = current;
    for (let i = m; i <= n; i++) {
        let thrid = current.next;
        current.next = pre;
        pre = current;
        current = thrid;
    }
    if (con != null) {
        // 不是从头开始倒转
        // con是反转前起点的前一个，接到反转链表段的起点
        con.next = pre;
    } else {
        // 头节点接到屁股
        head = pre;
    }
    // tail是反转列表段的终点, current是反转链表段的终点的下一个
    tail.next = current;
    return head;
};