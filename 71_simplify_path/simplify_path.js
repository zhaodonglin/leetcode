
var Stack = function(){
  this.top = null;
  this.size = 0;
};

var Node = function(data){
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  if (this.size === 0){
  	return null;
  }
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};

Stack.prototype.empty=function(){
	return this.size === 0
};
var simplifyPath = function(path) {
    var arr = path.split('/')
    var s = new Stack()
    for (var i = 0; i< arr.length;i++){
    	if (arr[i] === ''|| arr[i]==="."){continue}
    	else if (arr[i]!= '..'){s.push(arr[i])}
    	else {s.pop()}
    }

	if (s.empty()){
		return "/"
	}
	res= ""
	while(!s.empty()){
		str1 = s.pop().data
		res = "/"+str1+res
	}


	return res
};

console.log(simplifyPath("/."))
console.log(simplifyPath("/home/work/..//"))