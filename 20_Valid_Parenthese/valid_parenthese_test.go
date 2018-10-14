package valid_parenthese

import "testing"

func expect(val bool, s string, t *testing.T) {
	if isValid(s) != val {
		t.Error("failed the test", s)
	}
}

func Test_stack(t *testing.T) {
	expect(true, "()", t)
	expect(true, "[]", t)
	expect(false, "[(", t)
	expect(true, "()[]{}", t)
	expect(true, "[()]", t)
}
