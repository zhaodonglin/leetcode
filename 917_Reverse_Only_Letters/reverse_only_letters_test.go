package contest_105

import (
	"fmt"
	"testing"
)

func Test_Contest_15(t *testing.T) {
	fmt.Println(reverseOnlyLetters("ab-cd"))
	fmt.Println(reverseOnlyLetters("a-"))
	fmt.Println(reverseOnlyLetters("a-bc-de"))
	fmt.Println(reverseOnlyLetters("1-a"))
	fmt.Println(reverseOnlyLetters("a-bC-dEf-ghIj"))
	fmt.Println(reverseOnlyLetters("Test1ng-Leet=code-Q!"))
	fmt.Println(reverseOnlyLetters("7_28]"))

}
