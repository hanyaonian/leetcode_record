/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
	示例 1:
	输入: 1->2->3->3->4->4->5
	输出: 1->2->5
	示例 2:
	输入: 1->1->1->2->3
	输出: 2->3

 * 解法：有些投机了，将链表变成了数组，然后再将重复的删除并且新建一个链表。
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
    let valMap = new Map();
    while (head) {
        if (valMap.has(head.val)) {
            valMap.set(head.val, valMap.get(head.val) + 1);
        } else {
            valMap.set(head.val, 1);
        }
        head = head.next;
    }
    let ans = [];
    valMap.forEach((val, key) => {
        if (val > 1) {
            return ;
        } else {
            ans.push(new ListNode(key));
        }
    })
    for (let i = 0; i < ans.length; i++) {
        ans[i].next = ans[i + 1] || null;
    }
    return ans[0] || null;
};