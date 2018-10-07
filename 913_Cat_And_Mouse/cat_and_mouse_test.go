package cat_and_mouse

import (
	"fmt"
	"testing"
)

//Input:
//[[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
//Output:
//2
//Expected:
//0
func Test_Cat_And_Mouse(t *testing.T) {
	graph := [][]int{{2, 5}, {3}, {0, 4, 5}, {1, 4, 5}, {2, 3}, {0, 2, 3}}
	res := catMouseGame(graph)

	fmt.Println(res)

}
