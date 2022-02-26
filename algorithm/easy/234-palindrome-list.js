/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    let reverseListHead = reverseList(slow.next)
    
    while (reverseListHead) {
        if (head.val !== reverseListHead.val) return false
        head = head.next
        reverseListHead = reverseListHead.next
    }
    
    return true
};

function reverseList(listHead) {
    let prev = null
    let cur = listHead
    
    while (cur) {
        const next = cur.next
        
        cur.next = prev
        
        prev = cur
        
        cur = next
    }
    
    return prev
}
