/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 链表相交，简单题。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const nodeSet = new Set();
    while (headA) {
        nodeSet.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (nodeSet.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null
};