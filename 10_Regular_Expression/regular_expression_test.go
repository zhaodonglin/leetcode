package Regular_Expression

import (
	"testing"
)

func Test_Regular_Expression(t *testing.T) {

	if isMatch("mississippi", "mis*is*p*.") {
		t.Error("failed to match, mississippi mis*is*p*.")
	}

	if isMatch("aaab", "ab") {
		t.Error("failed to match, aaab, ab")
	}

	if isMatch("ab", ".*c") {
		t.Error("failed to match, ab,.*c")
	}
	if !isMatch("abc", "a*") {
		t.Error("failed to match, abc, a*")
	}

	if !isMatch("dc", ".*") {
		t.Error("failed to match, dc, .*")
	}

	if isMatch("dc", "c") {
		t.Error("failed to match, dc,c")
	}

	if isMatch("cd", "e") {
		t.Error("failed to match ,cd, e")
	}

	if !isMatch("d", "d") {
		t.Error("failed to match d, d")
	}

	if !isMatch("d", ".") {
		t.Error("failed to match d, .")
	}

	if isMatch("aa", "a") {
		t.Error("failed to match aa, a")
	}

	if !isMatch("aa", "aa") {
		t.Error("failde to match aa aa")
	}

	if isMatch("aaa", "aa") {
		t.Error("failde to match aaa aa")
	}

	if !isMatch("aa", "a*") {
		t.Error("failde to match aa a*")
	}

	if !isMatch("aa", ".*") {
		t.Error("failde to match aa .*")
	}

	if !isMatch("ab", ".*") {
		t.Error("failde to match ab .*")
	}

	if !isMatch("aab", "c*a*b*") {
		t.Error("failde to match aa aa")
	}

}
