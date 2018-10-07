package Regular_Expression

func isMatch(s string, p string) bool {
	sr := []byte(s)
	pr := []byte(p)

	if len(pr) == 0 {
		if len(sr) == 0 {
			return true
		}
		return false
	}

	if len(sr) == 0 {
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
			return true
		}
	}

	if pr[0] == sr[0] || pr[0] == '.' {
		return isMatch(string(sr[1:]), string(pr[1:]))
	}
	return true
}
