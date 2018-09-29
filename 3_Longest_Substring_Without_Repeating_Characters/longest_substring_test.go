package longest_substring

import (
	"testing"
)

func Test_longest_substring(t *testing.T) {
	if 3 != lengthOfLongestSubstring("abca") {
		t.Error("failed to get longest substring length")
	}

	if 1 != lengthOfLongestSubstring("a") {
		t.Error("falied to get longest substring length")
	}
}
