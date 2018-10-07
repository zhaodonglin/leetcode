package Longest_Common_Prefix

import (
	"testing"
)

func Test_Longest_Common_Prefix(t *testing.T) {
	if "a" != longestCommonPrefix([]string{"abc", "ab", "ac"}) {
		t.Error("Failed to get longet prefix")
	}

	if "ab" != longestCommonPrefix([]string{"abc", "ab", "abd"}) {
		t.Error("Failed to get longet prefix")
	}

	if "" != longestCommonPrefix([]string{"bc", "ab", "ad"}) {
		t.Error("Failed to get longet prefix")
	}

	if "a" != longestCommonPrefix([]string{"a"}) {
		t.Error("Failed to get longest prefix")
	}

	if "aa" != longestCommonPrefix([]string{"aaa", "aa", "aaa"}) {
		t.Error("Failed to get longest prefix")
	}

}
