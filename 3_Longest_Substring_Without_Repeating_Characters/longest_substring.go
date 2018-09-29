package longest_substring

func max(x int, y int) int {
	if x > y {
		return x
	}

	return y
}

func lengthOfLongestSubstring(s string) int {
	bytes := []byte(s)

	visited := make([]int, 256)
	for i := 0; i < 256; i++ {
		visited[i] = -1
	}

	maxLen := 0
	left := -1
	for i := 0; i < len(bytes); i++ {
		left = max(left, visited[bytes[i]])
		visited[bytes[i]] = i
		maxLen = max(maxLen, i-left)
	}

	return maxLen
}
