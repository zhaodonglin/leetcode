package Reverse_K_Nodes

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {

	if head == nil {
		return nil
	}
	if head.Next == nil {
		return head
	}
	var dummy ListNode

	p1 := head
	p2 := &dummy
	count := 0

	var lastDummy2 *ListNode
	lastDummy2 = nil
	var thisDummy2 *ListNode
	thisDummy2 = nil
	//:= nil

	var dummyHead ListNode
	//var midHead ListNode

	first := true

	//head->1->2->3->4->5
	//3->2->1->5->4
	for p1 != nil {
		tmp := p1.Next
		p1.Next = p2

		if count == 0 {
			p1.Next = nil

			lastDummy2 = thisDummy2
			thisDummy2 = p1
		}

		p2 = p1
		p1 = tmp
		count++

		//2->1 + 4->3
		if count == k {
			if first {
				dummyHead.Next = p2
				first = false

			} else {
				//fmt.Println("enter this part", p2, lastDummy2)
				lastDummy2.Next = p2
			}
			count = 0
		}
	}

	if count%k != 0 {
		fmt.Println("enter this part", lastDummy2)
		if lastDummy2 != nil {
			lastDummy2.Next = reverseList(p2)
		} else {
			return reverseList(p2)
		}

	}

	return dummyHead.Next
}

func reverseList(head *ListNode) *ListNode {
	var DummyHead ListNode
	p := head
	dummy := &DummyHead
	dummy.Next = nil

	for p != nil {
		tmp := p.Next
		p.Next = dummy.Next
		dummy.Next = p
		p = tmp
	}

	return dummy.Next
}
