package new_solution

import (
	"fmt"
	"testing"
)

func Test_Combine(t *testing.T) {
	fmt.Println("res", threeSum([]int{-1, 0, 1, 2, -1, -4}))
	fmt.Println("res", threeSum([]int{0, 0, 0, 0}))
	fmt.Println("res", threeSum([]int{-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6}))
}
