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
    const reverseList = head => {
        let tail = null
        
        while (head) {
            const temp = head.next
            head.next = tail
            tail = head
            head = temp
        }
        
        return tail
    }
    
    const endOfFirstHalf = head => {
        let slow = head
        let fast = head
        
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        
        return slow
    }
    
    if (!head) return null
    
    const firstHalfEnd = endOfFirstHalf(head)
    const secondHalfStart = reverseList(firstHalfEnd.next)
    
    let p1 = head
    let p2 = secondHalfStart
    
    while (p2) {
        if (p2.val !== p1.val) return false
        p1 = p1.next
        p2 = p2.next
    }
    
    return true
};
