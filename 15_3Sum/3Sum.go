package Sum

import (
	"fmt"
)

var res_arr [][]int

func combine(x []int, res []int, n int, m int) {
	if m == 0 {

		res_arr = append(res_arr, res)
		// fmt.Println(res_arr, len(res_arr))
		return
	}
	if n == 0 {
		return
	}

	combine(x, append(res, x[n-1]), n-1, m-1)
	combine(x, res, n-1, m)
	return
}

func combine_out(x []int, res []int, n int, m int) [][]int {
	combine(x, res, n, m)
	return res_arr
}

func get_sum(x []int) int {
	sum := 0
	for i := 0; i < len(x); i++ {
		sum += x[i]
	}
	return sum
}

func swap(x []int, begin, end int) []int {
	t := x[begin]
	x[begin] = x[end]
	x[end] = t
	return x
}

// func sort_arr(x []int, int begin, int end) []int {
// 	mid = (beign + end) / 2
// 	if a[begin] <= a[mid] {
// 		begin++
// 	}

// 	if a[end] >= a[mid] {
// 		end--
// 	}

// 	x = swap(a, begin, end)

// 	if begin > end {
// 		return x
// 	}

// 	sort_arr(x, begin, mid)
// 	sort_arr(x, mid+1, end)
// }

// func sort(x []int) []int {
// 	sort(x, 0, len(x)-1)
// }

func sort_three(x []int) [3]int {
	var y [3]int
	a := x[0]
	b := x[1]
	c := x[2]
	if a >= b {
		if a > c {
			//a>=b>=c
			if b >= c {
				y[0] = c
				y[1] = b
				y[2] = a
				//b<c<a
			} else {
				y[0] = b
				y[1] = c
				y[2] = a
			}
			//c>=a>=b
		} else {
			y[0] = b
			y[1] = a
			y[2] = c
		}
		//a<b
	} else {
		if a >= c {
			//b>a>=c
			y[0] = c
			y[1] = a
			y[2] = b
		} else {
			//b>a, c>a
			//b>=c>a
			if b >= c {
				y[0] = a
				y[1] = c
				y[2] = b
				//a<b<c
			} else {
				y[0] = a
				y[1] = b
				y[2] = c
			}
		}
	}
	return y
}

func isSame(x []int, y []int) bool {
	z1 := sort_three(x)
	z2 := sort_three(y)

	return z1[0] == z2[0] && z1[1] == z2[1] && z1[2] == z2[2]
}

func new_slice(x [][]int, i int) [][]int {
	var y [][]int
	for k := 0; k < len(x); k++ {
		if k == i {
			continue
		}
		y = append(y, x[k])
	}
	return y
}

func filter_same(x [][]int) [][]int {
	//fmt.Println(x)
	flag := false
	i := 0
	for i < len(x) {
		flag = false
		j := i + 1
		for j < len(x) {
			if isSame(x[i], x[j]) {
				fmt.Println(i, x[i], j, x[j])
				x = new_slice(x, j)
				fmt.Println("after filter", x, i, j)
				flag = true
			}
			j++
		}

		if flag {
			i = 0
		} else {
			i++
		}
		// i++
	}

	return x
}

func threeSum(x []int) [][]int {

	var res []int
	//var res_arr [][]int
	var sum_res [][]int
	res_arr = [][]int{}
	res_arr = combine_out(x, res, len(x), 3)

	for i := 0; i < len(res_arr); i++ {
		if get_sum(res_arr[i]) == 0 {
			sum_res = append(sum_res, res_arr[i])
		}
	}

	return filter_same(sum_res)
}
