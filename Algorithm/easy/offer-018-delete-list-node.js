/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (head.val === val) return head.next
    
    let cur = head
    let prev = null
    
    while (cur && cur.val !== val) {
        prev = cur
        cur = cur.next
    }
    
    prev.next = cur.next
    
    return head
};
