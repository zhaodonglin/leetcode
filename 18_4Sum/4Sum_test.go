package four_sum

import "testing"
import "fmt"

//[-1,-5,-5,-3,2,5,0,4] -7

func Test_Four_Sum(t *testing.T) {
	fmt.Println(fourSum([]int{1, 0, -1, 0, -2, 2}, 0))
	fmt.Println(fourSum([]int{-1, -5, -5, -3, 2, 5, 0, 4}, -7))
}
