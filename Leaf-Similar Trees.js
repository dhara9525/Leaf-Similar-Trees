// Javascript JS solution, faster than 99.12% of JavaScript online submissions 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) 
{
    var arr1=[], arr2=[];
    getLeaves(root1, arr1);
    getLeaves(root2, arr2);
    
    if(arr1.length!==arr2.length)
        return false;
    
    for(var i=0; i<arr1.length; i++)
    {
        if(arr1[i] != arr2[i])
            return false;
    }
    
    function getLeaves(root,arr)
    {
        if(root==null)
            return null;
        if(!root.left && !root.right)
            arr.push(root.val);
        getLeaves(root.left,arr);
        getLeaves(root.right,arr);
    }
    return true;
};