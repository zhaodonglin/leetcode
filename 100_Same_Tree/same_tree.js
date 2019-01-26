 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 };

var isSameTree = function(p, q) {
	if (p == null && q== null){
		return true
	}

	if (p== null && q!=null){
		return false;
	}

	if (p != null && q== null){
		return false;
	}

	if (p.val != q.val){
		return false;
	}
	
	if (!isSameTree(p.left, q.left)){
		return false;
	}

	if (!isSameTree(p.right, q.right)){
		return false;
	}
	return true;
};



