/**
 *  给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
    将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

    示例 1:

    给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let tempHead = head;
    const array = [];
    //将节点全部存入到数组中
    while (tempHead) {
        array.push(tempHead);
        tempHead = tempHead.next;
    };
    let temp;
    while (array.length) {
        if (!temp) {
            //第一个节点
            temp = array.shift() || null;
        } else {
            //temp作为首节点
            temp.next = array.shift();
            temp = temp.next || null;
        }
        //头尾相接
        temp.next = array.pop() || null;
        temp = temp.next;
    }
    if (temp) {
        temp.next = null;
    }
};