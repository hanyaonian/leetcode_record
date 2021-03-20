/**
 * 
 * 困难：合并k个链表，trick：合并到数组后排序，有违该题初衷。
 * 
 * 给你一个链表数组，每个链表都已经按升序排列。

	请你将所有链表合并到一个升序链表中，返回合并后的链表。

	 

	示例 1：

	输入：lists = [[1,4,5],[1,3,4],[2,6]]
	输出：[1,1,2,3,4,4,5,6]
	解释：链表数组如下：
	[
	1->4->5,
	1->3->4,
	2->6
	]
	将它们合并到一个有序链表中得到。
	1->1->2->3->4->4->5->6

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) {
        return null;
    }
    let combinedList = [];
    lists.forEach(unsortedList => {
        let head = unsortedList;
        while (head) {
            combinedList.push(head);
            head = head.next;
        }
    })
    combinedList.sort((pre, next) => {
        return pre.val -next.val;
    });
    for (let i = 0; i < combinedList.length; i++) {
        combinedList[i].next = combinedList[i + 1];
    }
    if (!combinedList.length) {
        return null;
    }
    combinedList[combinedList.length - 1].next = null;
    return combinedList[0]
};