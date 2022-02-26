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
    const dummyList = new ListNode(-1)
    let dummyHead = dummyList
    
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummyHead.next = list1
            dummyHead = dummyHead.next
            list1 = list1.next
        } else {
            dummyHead.next = list2
            dummyHead = dummyHead.next
            list2 = list2.next
        }
    }
    
    while (list1) {
        dummyHead.next = list1
        dummyHead = dummyHead.next
        list1 = list1.next
    }
    
    while (list2) {
        dummyHead.next = list2
        dummyHead = dummyHead.next
        list2 = list2.next
    }
    
    return dummyList.next
};
