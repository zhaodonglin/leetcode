var getFirstNotNull=function(root){
    if (root.right != null){return root.right;}
    root = root.next;
    while(root!=null){
        if (root.left != null){return root.left;}
        else if (root.right != null){return root.right;}
        root = root.next;
    }
    return null;
};

var getFirstNotNull2=function(root){
    while(root!=null){
        if (root.left != null){return root.left;}
        else if (root.right != null){return root.right;}
        root = root.next;
    }
    return null;
};

var connect = function(root) {
	if (null == root){
		return;
	}
	var tmp = null;
    var findFirst = false;

	while(root != null){
		if (null!= root.left) { 
			root.left.next = getFirstNotNull(root);
            if (!findFirst){tmp = root.left;findFirst = true;}
		}
		if (null != root.right) {
            if (root.next!= null){
                root.right.next =getFirstNotNull2(root.next);
            }else{
                root.right.next = null;
            }
			
            if (!findFirst){tmp =root.right; findFirst = true;}
		}
		root = root.next;
	}
	//console.log(tmp);
	connect(tmp);  	  
};
