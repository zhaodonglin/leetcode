var isMatch = function(s, p) {
	var i = 0
	var j = 0
	var starNext= -1
    var strStar =-1
	while(i  <= s.length-1) {
		if (s[i] == p[j] || p[j] == '?') {
//			console.log(i,j)
			i++
			j++
		} else if(p[j] == '*') {
			starNext = j++
			//console.log(starNext)
			strStar =i
		} else if(starNext!=-1) {
			j = starNext+1
			i = ++strStar
		} else {
			return false
		}
	}
//console.log("e",i,j)
	while(j <= p.length -1 && p[j] == '*') {
		j++
	}
	return j>p.length-1
};



console.log(isMatch("acdcb", "a*c?b"))
console.log(isMatch("aa", "a"))
console.log(isMatch("aaa", "aaa"))
console.log(isMatch("aaa", "a*"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("aa", "*"))
console.log(isMatch("cb", "?b"))
console.log(isMatch("cb", "c*"))
console.log(isMatch("cb", "c*"))




