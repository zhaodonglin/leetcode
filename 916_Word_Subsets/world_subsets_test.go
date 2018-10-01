package word_subsets

import (
	"fmt"
	"testing"
)

// Example 1:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
// Output: ["apple","google","leetcode"]
// Example 3:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
// Output: ["facebook","google"]
// Example 4:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
// Output: ["google","leetcode"]
// Example 5:

// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
// Output: ["facebook","leetcode"]
//["amazon","apple","facebook","google","leetcode"]
//["e","o"]

func isInRes(expected string, res []string) bool {
	for j := 0; j < len(res); j++ {
		if res[j] == expected {
			return true
		}
	}
	return false
}

func match(expected []string, res []string) bool {
	for i := 0; i < len(expected); i++ {
		if !isInRes(expected[i], res) {
			return false
		}
	}
	return true
}

func Test_Word_Subsets(t *testing.T) {
	var res []string
	res = wordSubsets([]string{"amazon", "apple", "facebook", "google", "leetcode"}, []string{"e", "o"})
	if !match([]string{"facebook", "google", "leetcode"}, res) {
		t.Error("failed")
		fmt.Println(res)
	}

	res = wordSubsets([]string{"amazon", "apple", "facebook", "google", "leetcode"}, []string{"l", "e"})
	if !match([]string{"apple", "google", "leetcode"}, res) {
		t.Error("failed")
	}

	res = wordSubsets([]string{"amazon", "apple", "facebook", "google", "leetcode"}, []string{"e", "oo"})
	if !match([]string{"facebook", "google"}, res) {
		t.Error("failed")
	}
	res = wordSubsets([]string{"amazon", "apple", "facebook", "google", "leetcode"}, []string{"lo", "eo"})
	if !match([]string{"google", "leetcode"}, res) {
		t.Error("failed")
	}
	res = wordSubsets([]string{"amazon", "apple", "facebook", "google", "leetcode"}, []string{"ec", "oc", "ceo"})
	if !match([]string{"facebook", "leetcode"}, res) {
		t.Error("failed")
	}
}
