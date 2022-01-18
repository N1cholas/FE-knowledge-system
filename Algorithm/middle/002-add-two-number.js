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
    const list = new ListNode(-1)
    let head = list
    
    while (l1 && l2) {
        const val = l1.val + l2.val
        const n = (k + val) % 10
        k = ~~((k + val) / 10)
        head.next = new ListNode(n)
        head = head.next
        l1 = l1.next
        l2 = l2.next
    }
    
    while (l1) {
        const n = (k + l1.val) % 10
        k = ~~((k + l1.val) / 10)
        head.next = new ListNode(n)
        head = head.next
        l1 = l1.next
    }
    
    while (l2) {
        const n = (k + l2.val) % 10
        k = ~~((k + l2.val) / 10)
        head.next = new ListNode(n)
        head = head.next
        l2 = l2.next
    }
    
    if (k) {
        head.next = new ListNode(k)
    }
    
    return list.next
};
