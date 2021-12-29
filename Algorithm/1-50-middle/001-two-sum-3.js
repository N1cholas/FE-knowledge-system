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
    let k = 0
    let node = {
        next: null
    }
    const head = node
    
    while (l1 && l2) {
        node.next = new ListNode((l1.val + l2.val + k) % 10)
        k = ~~((l1.val + l2.val + k) / 10)
        node = node.next
        l1 = l1.next
        l2 = l2.next
    }
    
    while (l1) {
        node.next = new ListNode((l1.val + k) % 10)
        k = ~~((l1.val + k) / 10)
        node = node.next
        l1 = l1.next
    }
    
    while (l2) {
        node.next = new ListNode((l2.val + k) % 10)
        k = ~~((l2.val + k) / 10)
        node = node.next
        l2 = l2.next
    }
    
    if (k) {
        node.next = new ListNode(1)
    }
    
    return head.next
};
