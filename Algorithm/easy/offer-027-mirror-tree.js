/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (!root) return null
    
    const leftTree = mirrorTree(root.left)
    const rightTree = mirrorTree(root.right)
    
    root.left = rightTree
    root.right = leftTree
    
    return root
};
