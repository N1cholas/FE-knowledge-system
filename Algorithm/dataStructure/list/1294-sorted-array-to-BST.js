/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function toBST(nums, l, r) {
        if (l > r) return null
        
        const mid = ~~((r - l) / 2) + l
        
        const node = new TreeNode(nums[mid])
        
        node.left = toBST(nums, l, mid - 1)
        node.right = toBST(nums, mid + 1, r)
        
        return node
    }
    
    return toBST(nums, 0, nums.length - 1)
};
