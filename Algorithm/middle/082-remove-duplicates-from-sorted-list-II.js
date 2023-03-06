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
    const dummyList = new ListNode(-1)
    dummyList.next = head
    
    let cur = dummyList
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const val = cur.next.val
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    
    return dummyList.next
};
