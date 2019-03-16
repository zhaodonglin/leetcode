var preorderTraversal = function(root) {
    var res = new Array();
    var que = new Array();
    if (null == root){
        return [];
    }
    que.push(root);

    while (que.length != 0){
       var a = que.pop();

       
       res.push(a.val);
       if (a.right!= null){
           que.push(a.right);
       }
       if (a.left != null){
           que.push(a.left);
       }
    }
    
    return res;
};
