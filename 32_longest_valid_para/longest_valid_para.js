
function Stack()
{
	this.stac =new Array();
	
	this.pop=function(){
		return this.stac.pop();
	}

	this.push=function(item){
		this.stac.push(item);
	}

	this.top=function() {
		if (this.stac.length >=1){
		   return this.stac[this.stac.length-1];
		}
		return ""
	}

	this.length=function(){
		return this.stac.length
	}

	this.empty=function(){
		return this.stac.length==0;
	}

};

var longestValidParentheses = function(s) {
    stack = new Stack()
    //console.log(stack.empty())

    arr = s.split("")
    var start = 0;
    var maxlen = 0;
    var len = 0;
    for(var i = 0; i<arr.length;i++){
    	if (arr[i] == '('){
    		stack.push(i)
    	} else {
    		if (stack.empty()){
    			start = i+1
    		} else {
    			stack.pop()
    			maxlen = stack.empty()? Math.max(maxlen, i-start+1):Math.max(maxlen, i-stack.top())
    		}	
    	}
    }
 
    return maxlen
};
console.log(longestValidParentheses("))()"))
console.log(longestValidParentheses("((()"))
console.log(longestValidParentheses("))()()"))
console.log(longestValidParentheses(")()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("()(()"))