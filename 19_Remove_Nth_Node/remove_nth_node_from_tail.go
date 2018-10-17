package remove_nth_node

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

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

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	p1 := head
	p2 := head

	var dummyHead ListNode
	dummyHead.Next = p1

	for n > 0 && p2 != nil {
		p2 = p2.Next
		n = n - 1
	}

	if n == 0 && p2 == nil {
		dummyHead.Next = p1.Next
		return dummyHead.Next
	}

	for p2.Next != nil {
		p1 = p1.Next
		p2 = p2.Next
	}

	if p1.Next != nil {
		p1.Next = p1.Next.Next
	}

	return dummyHead.Next
}
