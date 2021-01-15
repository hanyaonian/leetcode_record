/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 环形链表2
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
     const nodeSet = new Set();
     if (!head) {
         return null;
     }
     while (head) {
         if (nodeSet.has(head)) {
             return head;
         }
         nodeSet.add(head);
         head = head.next;
     }
     return null;
};