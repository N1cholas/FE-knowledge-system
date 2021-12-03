/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map()

    let node = head

    while(node) {
        if (map.has(node)) return true
        else map.set(node, node.val)

        node = node.next
    }

    return false
};

var hasCycle2 = function(head) {
    if (!head || !head.next) return false

    let slow = head
    let fast = head.next

    while (slow !== fast) {
        if (!fast || !fast.next) return false

        slow = slow.next
        fast = fast.next.next
    }

    return true
};
