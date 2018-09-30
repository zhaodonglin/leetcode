package reverse_integer

import (
	"testing"
)

func Test_Reverse_Integer(t *testing.T) {
	if 123 != reverse(321) {
		t.Error("failed")
	}
	if -123 != reverse(-321) {
		t.Error("failed")
	}
	if 0 != reverse(2147483647) {
		t.Error("failed")
	}

}
