/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function tryRobber(node, include) {
        if (!node) return 0
        
        let res = tryRobber(node.left, true) + tryRobber(node.right, true)
        if (include) {
            res = Math.max(res, node.val + tryRobber(node.left, false) + tryRobber(node.right, false))
        }
        
        return res
    }
    
    return tryRobber(root, true)
};
