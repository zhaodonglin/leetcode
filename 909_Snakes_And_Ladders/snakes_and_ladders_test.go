package snakes_and_ladders

import (
	"testing"
)

func test_getBoardPos(t *testing.T, index int, N int, x int, y int) {
	x1, y1 := getBoardPosByIndex(index, N)
	if x != x1 {
		t.Error("Failed to get x", x, x1)
	}
	if y != y1 {
		t.Error("Failed to get y", y, y1)
	}
}

func Test_GetPosition(t *testing.T) {

	test_getBoardPos(t, 36, 6, 0, 0)
	test_getBoardPos(t, 25, 6, 1, 0)
	test_getBoardPos(t, 16, 6, 3, 3)
	test_getBoardPos(t, 10, 5, 3, 0)

}

func Test_GetPos(t *testing.T) {
	A := [][]int{
		{-1, -1, -1, -1, -1, -1},
		{-1, -1, -1, -1, -1, -1},
		{-1, -1, -1, -1, -1, -1},
		{-1, 35, -1, -1, 13, -1},
		{-1, -1, -1, -1, -1, -1},
		{-1, 15, -1, -1, -1, -1}}

	if 4 != snakesAndLadders(A) {
		t.Error("Failed !")
	}
	if 1 != snakesAndLadders([][]int{{-1, -1}, {-1, 3}}) {
		t.Error("Failed")
	}

	if 2 != snakesAndLadders([][]int{
		{-1, -1, 19, 10, -1},
		{2, -1, -1, 6, -1},
		{-1, 17, -1, 19, -1},
		{25, -1, 20, -1, -1},
		{-1, -1, -1, -1, 15}}) {
		t.Error("Failed")
	}

}
