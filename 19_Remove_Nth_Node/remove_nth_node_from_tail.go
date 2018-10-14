package remove_nth_node

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func traverse(head *ListNode) {
	p1 := head
	//fmt.Println(p1.Next)
	for p1 != nil {
		fmt.Println(p1.Val)
		p1 = p1.Next
	}
}

func append(head *ListNode, node *ListNode) {
	node.Next = head.Next
	head.Next = node
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	p1 := head
	p2 := head

	for n > 0 {
		p2 = p2.Next
		n = n - 1
	}

	for p2.Next != nil {
		p1 = p1.Next
		p2 = p2.Next
	}

	p1.Next = p1.Next.Next

	return head
}
