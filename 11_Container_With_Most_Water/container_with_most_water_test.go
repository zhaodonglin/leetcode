package Container_With_Most_Water

import (
	"testing"
)

func Test_Container_With_Most_Water(t *testing.T) {
	if 134 != maxArea([]int{67, 67, 89, 6, 9}) {
		t.Error("failed!")
	}
}
