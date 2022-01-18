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
    const a1 = []
    const a2 = []
    const res = []
    let k = 0
    const list = new ListNode(-1)
    let head = list
    
    while (l1 || l2) {
        if (l1) {
            a1.push(l1.val)
            l1 = l1.next
        }
        if (l2) {
            a2.push(l2.val)
            l2 = l2.next
        }
    }
    
    while (a1.length && a2.length) {
        const val = a1.pop() + a2.pop()
        const n = (val + k) % 10
        k = ~~((val + k) / 10)
        res.push(new ListNode(n))
    }
    
    while (a1.length) {
        const val = a1.pop()
        const n = (val + k) % 10
        k = ~~((val + k) / 10)
        res.push(new ListNode(n))
    }
    
    while (a2.length) {
        const val = a2.pop()
        const n = (val + k) % 10
        k = ~~((val + k) / 10)
        res.push(new ListNode(n))
    }
    
    if (k) {
        res.push(new ListNode(k))
    }
    
    while (res.length) {
        head.next = res.pop()
        head = head.next
    }
    
    return list.next
};
