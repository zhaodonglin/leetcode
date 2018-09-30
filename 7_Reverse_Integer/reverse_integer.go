package reverse_integer

func reverse(x int) int {
	const INT_MAX, INT_MIN = (1 << 31) - 1, -(1 << 31)

	remainder := 0
	quotient := x
	res := 0

	for quotient != 0 {
		remainder = quotient % 10
		if res > INT_MAX/10 || (res == INT_MAX/10 && remainder > 7) {

			return 0
		}
		if res < INT_MIN/10 || (res == INT_MIN/10 && remainder < -8) {
			return 0
		}

		res = res*10 + remainder
		quotient = quotient / 10

	}

	return res
}
