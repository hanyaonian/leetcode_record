/**
 * 
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

	示例：

	给定一个链表: 1->2->3->4->5, 和 n = 2.

	当删除了倒数第二个节点后，链表变为 1->2->3->5.
	说明：

	给定的 n 保证是有效的。

    解法：这题取巧了。扔到数组里去处理了。实际上可以获取到链表长度再找的
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arrayList = [], header = head;
    while(header) {
        arrayList.push(header);
        header = header.next;
    }
    if (n < arrayList.length) {
        // skip delete one
        arrayList[arrayList.length - n - 1].next = arrayList[arrayList.length - n + 1] || null;
        return head;
    } else {
        // delete header
        head.next = null;
        return arrayList[1] || null
    }
};