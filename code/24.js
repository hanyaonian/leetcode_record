/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 解法：三指针，一个记录前一段，两个用于交换左右
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) {
        return null;
    }
    let temp = head, next = temp.next, ans = head.next, pre = null;
    while (temp && next) {
        let a = next.next;
        temp.next = a;
        next.next = temp;
        // 接尾
        if (pre) {
            pre.next = next;
        }
        pre = temp;
        // 指向下一个
        temp = a;
        if (temp) {
            next = temp.next;
        }
    }
    return ans ? ans : head
};