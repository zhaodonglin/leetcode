function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
};

var swap = function(node1, node2){
	if (null== node1 || null == node2){
		return;
	}
	var temp = node1.val
	node1.val = node2.val
 	node2.val = temp;
}

var recoverTree = function(root) {
	var parent = null;
	var first = null;
	var second = null;
	var cur = root;
	var pre;
	while(null!= cur){
		if (cur.left==null){
			if (parent && parent.val >cur.val){
				if (!first) first = parent;
				second = cur;
			}
			parent = cur;
			cur = cur.right;
		}else{
			pre = cur.left;
			while(pre.right && pre.right != cur) pre = pre.right;
			if(pre.right == null){
				pre.right = cur;
				cur = cur.left;
			} else {
				pre.right = null;
				if (parent.val > cur.val){
					if (first == null) first = parent;
					second = cur;
				}
				
				parent = cur;
				cur = cur.right;
			}
		}
	}
        swap(first, second);    
};

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);

node1.left = node3;
node3.right = node2;

recoverTree(node1);
console.log(node1);

