package x_of_a_kind

import (
	"testing"
)

func Test_X_OF_A_KIND(t *testing.T) {

	if !hasGroupsSizeX([]int{1, 1, 2, 2}) {
		t.Error("failed")
	}

	if hasGroupsSizeX([]int{1, 1, 2, 2, 2}) {
		t.Error("failed")
	}

	if hasGroupsSizeX([]int{1}) {
		t.Error("failed")
	}

	if !hasGroupsSizeX([]int{1, 1}) {
		t.Error("failed")
	}
	if !hasGroupsSizeX([]int{1, 1, 2, 2, 2, 2}) {
		t.Error("failed")
	}
	if !hasGroupsSizeX([]int{1, 1, 1, 1, 2, 2, 2, 2, 2, 2}) {
		t.Error("failed")
	}
	if !hasGroupsSizeX([]int{1, 1, 1, 2, 2, 2, 2, 2, 2}) {
		t.Error("failed")
	}

}
