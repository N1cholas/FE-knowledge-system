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
    function toBST(array, left, right) {
        if (left > right) return null
        
        const mid = ~~((right - left) / 2) + left
        
        const node = new TreeNode(nums[mid])
        node.left = toBST(array, left, mid - 1)
        node.right = toBST(array, mid + 1, right)
        
        return node
    }
    
    return toBST(nums, 0, nums.length - 1)
};
