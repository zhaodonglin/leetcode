
var clear = function(m ){
	for (var i = '1'; i<='9';i++){
		m[i]=0
	}
	m['.'] = 0

	for (key in m){
		console.log(isNaN(key))
	}
}
m={}
clear(m)

console.log('1',isNaN('1'))

var solveSudoku = function(n) {
	if (n==0){
		return 1
	}
	return n*solveSudoku(n-1)
}

console.log(solveSudoku(5))