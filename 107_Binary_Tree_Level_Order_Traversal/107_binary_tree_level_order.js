function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};

var helper = function(nodes, val_res, nodes){
	var new_vals = new Array();
	var new_nodes = new Array();
	for (var i = 0; i < nodes.length; i++){
		if (nodes[i].left != null){
		    	new_vals.push(nodes[i].left.val);
			new_nodes.push(nodes[i].left);	
		}
		if (nodes[i].right != null){
	            	new_vals.push(nodes[i].right.val);
			new_nodes.push(nodes[i].right);
		}
	}
        
	if (new_vals.length == 0){
		return;
	}

	val_res.unshift(new_vals);
	
	return helper(nodes, val_res, new_nodes);  
};

var levelOrderBottom = function(root) {
	var val_res = new Array();
	var nodes = new Array();
	var vals = new Array();
        if (root==null){
		return [];
	}
	nodes.push(root);
	vals.push(root.val);

	val_res.unshift(vals);
	helper(nodes, val_res, nodes);
	return val_res;	    
};


node1 = new TreeNode(3);
node2 = new TreeNode(9);
node3 = new TreeNode(20);
node4 = new TreeNode(15);
node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;


console.log(levelOrderBottom(node1));
console.log(levelOrderBottom(null));

