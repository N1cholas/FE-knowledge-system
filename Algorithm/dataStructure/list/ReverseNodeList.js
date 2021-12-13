/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head
    let prev = null
    
    while (cur) {
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    
    return prev
};
