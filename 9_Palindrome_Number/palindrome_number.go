package Palindrome_Number

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	if x < 10 {
		return true
	}

	div := 10
	for x/div >= 10 {
		div *= 10
	}

	for x > 0 {
		right := x % 10
		left := x / div

		if left != right {
			return false
		}

		x = x % div
		x = x / 10
		div = div / 100
	}

	return true
}
