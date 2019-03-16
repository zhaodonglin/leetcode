function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
	var mid = Math.floor(nums.length/2); 
	var root = new TreeNode(nums[mid]);
        if (nums.length<=0){
		return null;
	}
	console.log(nums); 
	if (nums.length == 1) {
		return root;
	}
        
        
	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid+1, nums.length));
	return root;	 
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
