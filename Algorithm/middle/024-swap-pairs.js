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
var swapPairs = function(head) {
    const dummyList = new ListNode(-1)
    dummyList.next = head
    
    let cur = dummyList
    
    while (cur.next && cur.next.next) {
        const node1 = cur.next
        const node2 = cur.next.next
        cur.next = node2
        node1.next = node2.next
        node2.next = node1
        
        cur = node2.next
    }
    
    return dummyList.next
};
