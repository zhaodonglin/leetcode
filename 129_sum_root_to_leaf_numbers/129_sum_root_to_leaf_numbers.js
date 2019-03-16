var helper = function(root, cur_val){
    var sum = 0;
    var is_leaf = (null == root.left && null == root.right);
    if (is_leaf) {return root.val + cur_val*10;}
    var cur_val = root.val+cur_val*10;
    if (root.left != null){
        sum += helper(root.left, cur_val);    
    }
    if (root.right != null){
        sum += helper(root.right, cur_val);    
    }
    return sum;
};
var sumNumbers = function(root) {
    if (null == root){
        return 0;
    }
    
  
    return helper(root, 0);
};
