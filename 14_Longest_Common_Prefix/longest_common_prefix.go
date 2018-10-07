package Longest_Common_Prefix

func getCommonStr(s1 string, s2 string) int {
	arr1 := []byte(s1)
	arr2 := []byte(s2)
	i := 0
	j := 0
	for i < len(arr1) && j < len(arr2) && arr1[i] == arr2[j] {
		i++
		j++
	}

	return i
}

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	if len(strs) == 1 {
		return strs[0]
	}

	com_index := len(strs[0])
	possiblePrefix := strs[0]
	i := 1
	for i < len(strs) {
		index := getCommonStr(possiblePrefix, strs[i])
		if index < com_index {
			com_index = index
		}
		i++
	}

	return string(possiblePrefix[0:com_index])
}
