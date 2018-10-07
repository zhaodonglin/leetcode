package Palindrome_Number

import (
	"testing"
)

func Test_Palindrome_Number(t *testing.T) {
	if !isPalindrome(1881) {
		t.Error("Palindrome")
	}

	if !isPalindrome(88) {
		t.Error("Palindrome 88")
	}

	if !isPalindrome(1) {
		t.Error("Palindrome 1")
	}

	if isPalindrome(23) {
		t.Error("Palindrome")
	}

	if !isPalindrome(198891) {
		t.Error("Palindrome 198891")
	}

	if !isPalindrome(1001) {
		t.Error("Palindrome 1001")
	}
}
