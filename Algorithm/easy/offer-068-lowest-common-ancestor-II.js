/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || p === root || q === root) {
        return root
    }
    
    const leftCommonAncestor = lowestCommonAncestor(root.left, p, q)
    const rightCommonAncestor = lowestCommonAncestor(root.right, p, q)
    
    if (!leftCommonAncestor) {
        return rightCommonAncestor
    }
    
    if (!rightCommonAncestor) {
        return leftCommonAncestor
    }
    
    return root
};
