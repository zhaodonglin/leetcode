package longest_palindrom_string

import (
	"fmt"
)

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func longestPalindrome(s string) string {
	data := []byte(s)

	start := 0
	end := 0
	maxLen := 0
	for i := 0; i < len(data); i++ {
		len1 := expandAround(data[:], i, i)
		len2 := expandAround(data[:], i, i+1)

		tmpLen := max(len1, len2)
		fmt.Println(tmpLen)
		if maxLen < tmpLen {
			maxLen = tmpLen
			start = i - (tmpLen-1)/2
			end = i + tmpLen/2
		}
	}
	fmt.Println(start, end)
	fmt.Println(string(data[start : end+1]))
	return string(data[start : end+1])
}

func expandAround(data []byte, left int, right int) int {
	lastLeft := 0
	lastRight := 0
	for left >= 0 && right < len(data) && data[left] == data[right] {
		lastLeft = left
		lastRight = right
		left = left - 1
		right = right + 1

	}

	return lastRight - lastLeft + 1
}
