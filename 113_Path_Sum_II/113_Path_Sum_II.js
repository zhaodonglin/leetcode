function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
var helper = function(root, sum, res, tmp_res, path_res){

    res = res + root.val;
    //console.log(tmp_res);
    if (root.left == null && root.right == null){
        //console.log("hit",sum ,res, root.val, tmp_res);
        if ( sum == res) {
                tmp_res.push(root.val);
                path_res.push(tmp_res.slice(0));
                tmp_res.pop();
                return;
        } else{
            //tmp_res.pop();
            return;
        }
    }
    if (null != root.left){
        tmp_res.push(root.val);
        //console.log("before left", tmp_res);
        helper(root.left, sum, res, tmp_res, path_res);
       
        tmp_res.pop();
         //console.log("after left", tmp_res);
    }
    //console.log("after left", tmp_res)
    //res.pop();
    if (null != root.right){
        tmp_res.push(root.val);
        helper(root.right, sum, res, tmp_res, path_res);
        tmp_res.pop();
    }
    
    //res.pop()
    return;
};

var pathSum = function(root, sum) {
    var res = 0;
    var path_res=new Array();
    var tmp_res = new Array();
    if (null == root){
        return [];
    }
    helper(root, sum, res, tmp_res,path_res);
    return path_res;
}; 
