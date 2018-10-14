package letters_of_combination

func letters(digits string, res *string, results *[]string) {
	tbl := map[byte]string{'2': "abc", '3': "def", '4': "ghi", '5': "jkl",
		'6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"}

	data := []byte(digits)

	if len(data) == 0 {
		*results = append(*results, *res)
		return
	}

	digit := data[0]
	s := tbl[digit]

	for _, c := range []byte(s) {
		new_res := *res + string(c)

		letters(string(data[1:]), &new_res, results)
	}

	return
}

func lettersCombinations(digits string) []string {
	var res string
	var results []string
	letters(digits, &res, &results)
	return results
}
