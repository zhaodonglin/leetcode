package contest

import "testing"

import "fmt"

func Test_Contest(t *testing.T) {
	fmt.Println(isLongPressedName("", ""))

	fmt.Println(isLongPressedName("alex", "aaleex"))

	fmt.Println(isLongPressedName("eed", "edd"))
	fmt.Println(isLongPressedName("saeed", "ssaaedd"))
	fmt.Println(isLongPressedName("leelee", "lleeelee"))
	fmt.Println(isLongPressedName("laiden", "laiden"))

	fmt.Println(isLongPressedName("pyplrz", "ppyypllr"))

}
