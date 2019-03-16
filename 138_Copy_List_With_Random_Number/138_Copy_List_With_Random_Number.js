/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    var node = head;
    var prev= null;
    var headOfList = null;
    
    while(node != null) {
        var newNode = new Node(node.val, null, null);
        
        if (null != prev) {
            prev.next = newNode;
        }
        
        if (headOfList == null){
            headOfList = newNode;
        }
        node = node.next;
        prev = newNode;
    }
    node = head;
    var begin = headOfList;
    console.log(prev);
    
    while(node != null){
        if (null != node.random){
              fillRandom(node, begin, node.random, head, headOfList)   
        }  
        begin = begin.next;
        node = node.next;    
    }
    return headOfList;
};
    
var fillRandom=function(curNode, beginNode, RandomNode, listBegin, copyBegin){
    var cur = curNode;
    var begin = beginNode;
    while(cur != RandomNode){
        if (cur == null){
            begin = copyBegin;
            cur = listBegin;
        } else{
            cur = cur.next;
            begin = begin.next;
        }

    }
    beginNode.random = begin;
};
