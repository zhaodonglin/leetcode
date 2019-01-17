var  Pos = function(i,j){
	this.i = i;
	this.j = j;
};


var inPath = function(curPath, curPos){
	for (var index = 0 ; index < curPath.length;index++){
		//console.log(index, curPath[index].x, curPath[index].y)
		//console.log(index, curPos.x, curPos.y)
		if ((curPath[index].i == curPos.i) && (curPath[index].j == curPos.j)){
			return true
		}
	}
	return false
};
var helper = function(board, word, i, j, curPath){
	//console.log(i,j)
	if (i<0){
		return false
	}
	if (i>=board.length){
		return false
	}
	if (j>=board[0].length){
		return false
	}

	if (word.length == 0){
		//console.log("xx", curPath,word)
		return true
	}
	var pos= new Pos(i,j)
	if (inPath(curPath, pos)){
		//console.log(i,j,"inpath")
		return false
	}

	if (board[i][j] == word[0]){
		
		curPath.push(pos)
		if (helper(board, word.slice(1, word.length), i+1, j,curPath)){
			return true
		}
		else if (helper(board, word.slice(1, word.length), i-1, j, curPath)){
			return true
		}
		else if (helper(board, word.slice(1, word.length), i, j+1,curPath)){
			return true
		}
		else if (helper(board, word.slice(1, word.length), i, j-1,curPath)){
			return true
		}
		curPath.pop()
	}
	//console.log(i,j)
	return false
};


var exist = function(board, word) {
	arr = word.split("")
	//console.log(arr)

	curPath = new Array()
	for (var i =0;i<board.length;i++){
		for (var j = 0;j<board[0].length;j++){
			if (board[i][j] == word[0]){
				//console.log('begin', i,j)
				if (helper(board, word, i, j, curPath)){
					return true
				}
			}

		}
	}
	return false
};

console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], "ABCCED"))


console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], "SEE"))


console.log(exist([
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], "ABCB"))

console.log(exist([
  ['a','a']
], "aaa"))

console.log(exist([
  ['a','a']
], "aa"))

console.log(exist([
  ['a','a']
], "ab"))

console.log(exist([
  ['a','a']
], "a"))
