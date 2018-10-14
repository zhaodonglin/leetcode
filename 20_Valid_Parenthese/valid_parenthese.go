package valid_parenthese

const SIZE = 100

type stack struct {
	top byte
	arr [SIZE]byte
}

func (s *stack) push(val byte) {
	s.arr[s.top] = val
	s.top = s.top + 1
}

func (s *stack) pop() byte {
	top := s.top
	s.top = s.top - 1
	return s.arr[top]
}

func (s *stack) peep() byte {
	return s.arr[s.top-1]
}

func (s *stack) empty() bool {
	return s.top == 1
}

func isMatch(c1 byte, c2 byte) bool {
	return ((c1 == '(') && (c2 == ')')) || ((c1 == '[') && (c2 == ']')) || ((c1 == '{') && (c2 == '}'))
}

func isValid(s string) bool {
	data := []byte(s)

	var stk stack
	stk.top = 1
	for _, val := range data {
		if isMatch(stk.peep(), val) {
			stk.pop()
		} else {
			stk.push(val)
		}
	}
	return stk.empty()
}
