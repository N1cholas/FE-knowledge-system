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
var deleteDuplicates = function(head) {
    const start = head
    
    if (!head) return null
    
    while (head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
    }
    return start
};
