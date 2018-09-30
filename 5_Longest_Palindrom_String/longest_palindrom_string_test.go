package longest_palindrom_string

import (
	"testing"
)

func Test_Longest_Palindromic_String(t *testing.T) {

	if "aba" != longestPalindrome("abac") {
		t.Error("failed!")
	}

	if "a" != longestPalindrome("a") {
		t.Error("failed!")
	}
	if "abba" != longestPalindrome("abbac") {
		t.Error("failed!")
	}
	if "abba" != longestPalindrome("abba") {
		t.Error("failed!")
	}
}
