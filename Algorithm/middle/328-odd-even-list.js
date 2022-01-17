/**
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
var oddEvenList = function(head) {
    if (!head) return null
    
    let number = 1
    let odd = head
    let even = head.next
    
    if (!even) return odd
    
    const oddHead = odd
    const evenHead = even
    
    let cur = even.next
    while (cur) {
        if (number % 2) {
            odd.next = cur
            odd = odd.next
        } else {
            even.next = cur
            even = even.next
        }
        cur = cur.next
        number++
    }
    
    odd.next = evenHead
    even.next = null
    
    return oddHead
};
