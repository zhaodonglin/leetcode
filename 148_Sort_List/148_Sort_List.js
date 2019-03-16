var sortList = function(head) {
    var dummy_head_left = new ListNode(0);
    var dummy_head_right = new ListNode(0);
    if (null == head){
        return [null, null];
    }
    var mid = head.val;
    var p = head.next;
    head.next = null;
    var left_tail = null;
    var right_tail = null;
    while(p != null) {
        var next = p.next;
        if (p.val < mid) {
            p.next = dummy_head_left.next;
            dummy_head_left.next = p;
            left_tail = p;
        } else if(p.val > mid) {
            p.next = dummy_head_right.next;
            dummy_head_right.next = p;
            right_tail = p;
        } else {
            p.next = head.next;
            head.next = p;
            console.log("head111", head);
        }
        p = next;
    }
    console.log("left", dummy_head_left.next);

    var left = sortList(dummy_head_left.next);
    console.log("left2", left);

    console.log("right", dummy_head_right.next);
    var right = sortList(dummy_head_right.next);
    console.log("right2", right);

    var head_end_p = head;
    while(head_end_p != null){
        head_end = head_end_p;
        head_end_p = head_end_p.next;
    }
    head_end.next = right[0];

    console.log("head", head);
    console.log("tail", left_tail);
    console.log("left", left);
    if (left[1] != null) {
        left[1].next = head;
        if (right[1] == null){
            return [left[0], head_end];
        }else{
            return [left[0], right[1]];
        }
    } else {
        if (right[1] == null){
            return [head, head_end]; 
        }else{
            return [head, right[1]];
        } 
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var node1 = new ListNode(4);
var node2 = new ListNode(-2);
var node3 = new ListNode(1);
var node4 = new ListNode(3);
var node5 = new ListNode(-2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var arr = sortList(node1)[0];

function traverse(head){
    var p = head;
    while(p){
        console.log(p.val);
        p = p.next;
    }
}

//console.log("res", sortList(node1)[0]);

traverse(arr)
