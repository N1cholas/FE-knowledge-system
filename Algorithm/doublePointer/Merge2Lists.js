/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = {
        next: null
    }
    
    let node = head
    
    while (list1 || list2) {
        if (!list1) {
            node.next = list2
            list2 = list2.next
        } else if (!list2) {
            node.next = list1
            list1 = list1.next
        } else if (list1.val <= list2.val) {
            node.next = list1
            list1 = list1.next
        } else {
            node.next = list2
            list2 = list2.next
        }
        
        node = node.next
    }
    
    return head.next
};
