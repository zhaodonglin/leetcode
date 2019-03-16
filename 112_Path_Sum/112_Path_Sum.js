function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};


var helper = function(root, sum, res){
    if (root == null){
        return false;
    }

    res = res + root.val;
    //console.log(root.val)
    if (root.left == null && root.right == null){
        //console.log("hit",sum ,res)
        return sum == res;
    }
    
    if (helper(root.left, sum, res)){
        return true;
    }
    //console.log(res)
    //res = res - root.val;
    if (helper(root.right, sum, res)){
        return true;
    }
    return false;
};

var hasPathSum = function(root, sum) {
    var res = 0;
    return helper(root, sum, res);
};
