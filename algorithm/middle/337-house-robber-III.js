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
    // 返回二元组，第一项代表当前节点偷的值另一个为不偷的值
    function postOrder(node) {
        if (!node) {
            return [0, 0]
        }
        
        const left = postOrder(node.left)
        const right = postOrder(node.right)
        
        return [
            node.val + left[1] + right[1],
            Math.max(...left) + Math.max(...right)
        ]
    }
    
    return Math.max(...postOrder(root))
};
