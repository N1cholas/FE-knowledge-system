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
    const res = []

    let node = head

    while (node) {
        res.push(node)

        node = node.next
    }

    let left = 0
    let right = res.length - 1

    while (left < right) {
        if (res[left++].val !== res[right--].val) return false
    }

    return true
};
