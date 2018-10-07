package contest_105

import (
	"fmt"
)

func isLetter(c byte) bool {
	return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

func swap(data []byte, i, j int) {
	tmp := data[i]
	data[i] = data[j]
	data[j] = tmp
}

func reverseOnlyLetters(S string) string {
	data := []byte(S)
	i := 0
	j := len(data) - 1

	for i < j {
		for i < len(data) && !isLetter(data[i]) {
			i++
		}

		for j >= 0 && !isLetter(data[j]) {
			j--
		}
		//fmt.Println(i, j)

		if i >= j {
			//fmt.Println(i, j)
			break
		}

		swap(data, i, j)
		i++
		j--
	}

	return string(data[:])
}
