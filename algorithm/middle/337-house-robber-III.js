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
// 每一个节点定义它偷和不偷的二元组
var rob = function(root) {
    function tryRob (node) {
        if (!node) return [0, 0]
        
        const left = tryRob(node.left)
        const right = tryRob(node.right)
        
        const rob = node.val + left[1] + right[1]
        const noRob = Math.max(...left) + Math.max(...right)
        
        return [rob, noRob]
    }
    
    return Math.max(...tryRob(root))
};
