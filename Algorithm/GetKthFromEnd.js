/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let len = 0
  let node = head
  let map = new Map()

  while (node) {
    map.set(len, node)

    node = node.next
    len++
  }

  return map.get(len - k)
};
