/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const ans = []
    
    while (queue.length) {
        const cur = []
        
        for (let i = queue.length -1; i >= 0; i--) {
            const node = queue.shift()
            cur.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        
        ans.push(cur)
    }
    
    return ans
};
