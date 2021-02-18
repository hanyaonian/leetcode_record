/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
	示例 1:

	输入: 1->1->2
	输出: 1->2

	解法：快慢指针，慢指针记录非重复的数
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return null
    }
    let i = head, temp = i;
    while (i && i.next) {
        if (i.val !== i.next.val) {
            temp.next = i.next;
            temp = i.next;
        }
        i = i.next;
    }
    temp.next = null;
    return head;
};