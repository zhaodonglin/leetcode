function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

var helper = function(level, res){
     var new_level = new Array();
     if (level.length ==0){
	return;	
     }
     for (var i = 0;i<level.length; i++){ 
          if (level[i].left != null) {
	     new_level.push(level[i].left);
	  }
	  if (level[i].right != null){
		new_level.push(level[i].right);
	  }	
      }
      console.log(new_level); 
      if (new_level.length != 0) {
      	  res.push(new_level);
	  helper(new_level, res);
      }
};

var levelOrder = function(root) {
	var res = new Array();
	var level_res = new Array();
	level_res.push(root);
   	
	res.push(level_res);
	console.log(res);
	helper(level_res, res);
	var res_val = new Array();
	for (var i = 0 ; i < res.length; i++){
		val = new Array();
		for (var j =0; j <res[i].length; j++){
			val.push(res[i][j].val);
		}
		res_val.push(val);
	}    
        return res_val;	
};

var node1 = new TreeNode(3);
var node2 = new TreeNode(9);
var node3 = new TreeNode(20);
var node4 = new TreeNode(15);
var node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;


console.log(levelOrder(node1));
