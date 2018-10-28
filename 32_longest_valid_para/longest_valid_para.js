function item(index, para){
	this.index = index
	this.para = para

	this.indexInArray = function(){
		return this.index
	}

	this.paranthese = function(){
		return this.para
	}
}

function Stack()
{
	this.stac =new Array();
	
	this.pop=function(){
		return this.stac.pop();
	}

	this.push=function(item){
		this.stac.push(item);
	}

	this.peep=function() {
		if (this.stac.length >=1){
		   return this.stac[this.stac.length-1];
		}
		return new item(-1, "")
	}

	this.length=function(){
		return this.stac.length
	}
}

var longestValidParentheses = function(s) {
    var stack=new Stack();
    var arr = s.split("")
    var count = 0
    var new_begin = false
    var maxLen = 1
    var curLen = 0
    for (var i = 0; i<arr.length; i++){
    	if (arr[i] == '('){
    		stack.push(new item(i, arr[i]))

    	} else {
    		var c = stack.peep()
    		if (c.paranthese() == '('){
    			stack.pop()
    			curLen += 2
    			//stack is empty
    			curLen = curLen +2
    			

    		} else {
    			stack.push(new item(i, arr[i]))
    		}
    	}
    }

    return s.length - stack.length()
};

console.log(longestValidParentheses(")()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("()(()"))