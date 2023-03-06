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
var findTilt = function(root) {
    function sum(node) {
        if (!node) return 0
        
        const leftSum = sum(node.left)
        const rightSum = sum(node.right)
        
        ans += Math.abs(leftSum - rightSum)
        
        return node.val + leftSum + rightSum
    }
    
    let ans = 0
    
    sum(root)
    
    return ans
};
