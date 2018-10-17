package merged_two_sorted_array

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

func mergeTwoLists(L1 *ListNode, L2 *ListNode) *ListNode {
	var dummy ListNode

	head1 := L1
	head2 := L2

	var p1 *ListNode
	p1 = &dummy

	for head1 != nil && head2 != nil {
		if head1.Val < head2.Val {
			p1.Next = head1
			p1 = head1
			head1 = head1.Next
		} else {
			p1.Next = head2
			p1 = head2
			head2 = head2.Next
		}
	}

	// for head1 != nil {
	// 	p1.Next = head1
	// 	p1 = head1
	// 	head1 = head1.Next
	// }

	// for head2 != nil {
	// 	p1.Next = head2
	// 	p1 = head2
	// 	head2 = head2.Next
	// }
	if head1 != nil {
		p1.Next = head1
	}

	if head2 != nil {
		p1.Next = head2
	}
	return dummy.Next
}
