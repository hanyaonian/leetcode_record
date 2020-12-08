/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let moveOn = 0;
    let head, tail;
    while (l1 || l2) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;
        let sum = num1 + num2 + moveOn;
        if (!head) {
            tail = head = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        moveOn = parseInt(sum / 10); 
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    };
    if (moveOn > 0) {
        tail.next = new ListNode(moveOn);
    }
    return head;
};