package reverse_pair

import "testing"
import "fmt"

func traverse(head *ListNode) {
	p1 := head
	fmt.Println("begin:")
	for p1 != nil {
		fmt.Println(p1.Val)
		p1 = p1.Next
	}
	fmt.Println("end")
}

func append(head *ListNode, node *ListNode) {
	node.Next = head.Next
	head.Next = node
}

func Test_Reverse_Pair(t *testing.T) {
	var head ListNode
	head.Val = 1
	head.Next = nil

	var listNode4 ListNode
	listNode4.Val = 6

	var listNode5 ListNode
	listNode5.Val = 5

	var listNode1 ListNode
	listNode1.Val = 4

	var listNode2 ListNode
	listNode2.Val = 3

	var listNode3 ListNode
	listNode3.Val = 2
	//append(&head, &listNode4)
	append(&head, &listNode5)
	append(&head, &listNode1)
	append(&head, &listNode2)
	append(&head, &listNode3)

	traverse(&head)
	traverse(reverse_pair(&head))

}

func Test_Reverse_Pair2(t *testing.T) {
	var head ListNode
	head.Val = 1
	head.Next = nil

	// var listNode4 ListNode
	// listNode4.Val = 6

	// append(&head, &listNode4)
	// traverse(&head)
	traverse(reverse_pair(&head))
}
