package add_two_numbers

import (
	"fmt"
	"testing"
)

func appendANode(listNode *ListNode, val int) {
	newNode := new(ListNode)
	newNode.Val = val
	listNode.Next = newNode
}

func one_node_surplus(t *testing.T) {
	var listNode1, listNode2 ListNode
	listNode1.Val = 9
	appendANode(&listNode1, 1)

	listNode2.Val = 1
	res := addTwoNumbers(&listNode1, &listNode2)
	if res.Val != 0 && res.Next.Val != 2 {
		fmt.Println(res.Val, res.Next.Val)
		t.Error("Failed !")
	}

}

func node_num_equal(t *testing.T) {
	var listNode1, listNode2 ListNode
	listNode1.Val = 9
	appendANode(&listNode1, 1)

	listNode2.Val = 1
	appendANode(&listNode2, 9)
	res := addTwoNumbers(&listNode1, &listNode2)
	if res.Val != 0 && res.Next.Val != 0 && res.Next.Next.Val != 1 {
		t.Error("Failed !")
	}
}

func node_num_equal_without_carry(t *testing.T) {
	var listNode1, listNode2 ListNode
	listNode1.Val = 8
	appendANode(&listNode1, 1)

	listNode2.Val = 1
	appendANode(&listNode2, 8)
	res := addTwoNumbers(&listNode1, &listNode2)
	if res.Val != 9 && res.Next.Val != 9 {
		t.Error("Failed !")
	}
}

func one_node_surplus_without_carry(t *testing.T) {
	var listNode1, listNode2 ListNode
	listNode1.Val = 8
	appendANode(&listNode1, 1)

	listNode2.Val = 1
	res := addTwoNumbers(&listNode1, &listNode2)
	if res.Val != 9 && res.Next.Val != 1 {
		t.Error("Failed !")
	}
}
func Test_add_two_numbers(t *testing.T) {
	one_node_surplus(t)
	node_num_equal(t)
	node_num_equal_without_carry(t)
	one_node_surplus_without_carry(t)
}
