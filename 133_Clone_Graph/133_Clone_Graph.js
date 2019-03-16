var cloneGraph = function(node) {
    var visited={};
    if (node == null){
        return null;
    }else{
        return dfs(node);
    }
    
    function dfs(node){
        var newNode= null;
        if (visited[node.val]){
            newNode = visited[node.val];
        }else{
            newNode = new Node(node.val, new Array());
            visited[newNode.val] = newNode;
        }
        for (var i = 0; i < node.neighbors.length; i++){
            if (node.neighbors[i].val != node.val){
                if (visited[node.neighbors[i].val]){
                    newNode.neighbors.push(visited[node.neighbors[i].val]);
                } else {
                    newNode.neighbors.push(dfs(node.neighbors[i]));
                }
            }else{
                newNode.neighbors.push(newNode); 
            }
            
        }
    }
};
