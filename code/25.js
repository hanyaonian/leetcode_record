/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
k 是一个正整数，它的值小于或等于链表的长度。
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：
给你这个链表：1->2->3->4->5
当 k = 2 时，应当返回: 2->1->4->3->5
当 k = 3 时，应当返回: 3->2->1->4->5

 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 解法1:数组操作，链表转数组-》数组衔接
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) {
        return null
    }
    let arr = [], ans = [];
    while (head) {
        arr.push(head);
        head = head.next;
    } 
    let count = ~~(arr.length / k), left = arr.length % k;
    for (let i = 0; i < count; i ++) {
        ans.push(...arr.slice(i * k, (i + 1)*k ).reverse());
    }
    for (let i = 0; i < left; i ++) {
        ans.push(arr[i + count * k]);
    }
    for (let i = 0; i < ans.length; i++) {
        ans[i].next = ans[i+1] || null;
    }
    return ans[0];
};


/**
 * 解法2: 常数额外空间，best solution in leetcode
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverse(a,b) {
    let pre,cur,nxt;
    pre = null,cur=nxt=a;
    while (cur != b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    // 返回反转后的头结点
    return pre;
}
var reverseKGroup = function(head, k) {
     if (head == null) return null;
    // 区间 [a, b) 包含 k 个待反转元素
    let a, b;
    a = b = head;
    for (let i = 0; i < k; i++) {
        // 不足 k 个，不需要反转，base case
        if (b == null) return head;
        b = b.next;
    }
    // 反转前 k 个元素
    let newHead = reverse(a, b);
    // 递归反转后续链表并连接起来
    a.next = reverseKGroup(b, k);
    return newHead;
};