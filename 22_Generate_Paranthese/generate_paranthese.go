package generate_paranthese

import "fmt"

func generate(leftNum, rightNum, n int, res string, results *[]string) {
	if leftNum < rightNum {
		fmt.Println("leftNum<rightNum", leftNum, rightNum)
		return
	}

	if leftNum >= n && rightNum >= n {
		fmt.Println("&&", leftNum, rightNum)
		*results = append(*results, res)
		res = ""
		return
	}

	if leftNum > n || rightNum > n {
		fmt.Println("||", leftNum, rightNum)
		return
	}

	generate(leftNum+1, rightNum, n, res+"(", results)
	generate(leftNum, rightNum+1, n, res+")", results)
	return
}

func generateParenthesis(n int) []string {
	var results []string
	generate(0, 0, n, "", &results)
	return results
}
