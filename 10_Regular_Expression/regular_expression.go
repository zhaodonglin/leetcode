package Regular_Expression

import (
	"fmt"
)

func isMatch(s string, p string) bool {
	sr := []byte(s)
	pr := []byte(p)

	fmt.Println("s", s, "pattern", p)
	if len(pr) == 0 {
		if len(sr) == 0 {
			return true
		}
		return false
	}

	if len(sr) == 0 {
		fmt.Println(len(pr))
		if len(pr)%2 == 0 {
			for i := 1; i < len(pr); {
				if pr[i] != '*' {
					return false
				}
				i = i + 2
			}
			return true
		}

		return false
	}

	if len(pr) == 1 {
		if len(sr) == 1 {
			return pr[0] == sr[0] || pr[0] == '.'
		}
		return false
	}

	if pr[1] == '*' {
		if len(pr) > 2 {
			if isMatch(s, string(pr[2:])) {
				return true
			}

			if pr[0] == sr[0] || pr[0] == '.' {
				return isMatch(string(sr[1:]), p)
			}
		}

		if len(pr) == 2 {
			for i := 0; i < len(sr); i++ {
				if sr[i] != pr[0] && pr[0] != '.' {
					return false
				}
			}
			return true
		}
	}

	if pr[0] == sr[0] || pr[0] == '.' {
		return isMatch(string(sr[1:]), string(pr[1:]))
	}
	return false
}
