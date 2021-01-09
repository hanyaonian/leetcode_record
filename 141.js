/**
 * 给定一个链表，判断链表中是否有环。
 * 简单题。
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let nodeSet = new Set();
    if (!head) {
        return false
    }
    while(head) {
        if (nodeSet.has(head)) {
            return true;
        }
        nodeSet.add(head);
        head = head.next;
    }
    return false;
};

//  进阶解法， 快慢指针，空间复杂度1
var hasCycle = function(head) {
    if (!head) {
        return false
	}
	let fast = head.next, slow = head;
	while (slow != fast) {
		//有尽头
        if (!fast || !fast.next) {
            return false;
		}
		fast = fast.next.next;
		slow = slow.next;
    }
    return true; // 有环，相遇了
};