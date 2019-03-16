var insertionSortList = function(head) {
    if (null== head){
        return null;
    }
    var dummy = new ListNode(1);
    var cur_unordered_node = head.next;
    
    dummy.next = head;
    head.next = null;
    
    while(null != cur_unordered_node) {
        var ordered_nodes_head = dummy.next;
        if (cur_unordered_node.val < ordered_nodes_head.val) {
            var next_unordered_node = cur_unordered_node.next;
            dummy.next = cur_unordered_node;
            cur_unordered_node.next = ordered_nodes_head;
            cur_unordered_node = next_unordered_node;
        } else {
            var p = ordered_nodes_head;
            var prev = null;
            while (p!= null) {
                if (p.val > cur_unordered_node.val){
                    break;
                }
                prev = p;
                p= p.next;
            }   
            var next_unordered_node = cur_unordered_node.next;
            cur_unordered_node.next = prev.next;
            prev.next = cur_unordered_node;
            cur_unordered_node = next_unordered_node;
        }
    }
    return dummy.next;
};
