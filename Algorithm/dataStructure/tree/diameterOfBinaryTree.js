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
var diameterOfBinaryTree = function(root) {
    let ans = 0
    
    function dfs(root) {
        if (!root) return 0
    
        const leftDepth = root.left ? dfs(root.left) + 1 : 0
        const rightDepth = root.right ? dfs(root.right) + 1 : 0
        
        ans = Math.max(ans, leftDepth + rightDepth)
        return Math.max(leftDepth, rightDepth)
    }
    
    dfs(root)
    
    return ans
};
