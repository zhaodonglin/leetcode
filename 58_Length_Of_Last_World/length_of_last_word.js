var lengthOfLastWord = function(s) {
   var arr = s.split("")
   var beginPos = 0

   var length = arr.length
   var endPos = length -1
   var lastbegin = 0

   if (length==0){
   	return 0
   }

   for(var i=0;i<length;i++){
   	if (arr[i] == ' ' && i+1<length&&arr[i+1]!=' '){
   		lastbegin = beginPos
   		beginPos=i+1

   	}
   }

   for(var j=length-1;j>=0&&arr[j] == ' ';j--){}
   	
   endPos = j
   //console.log(j, endPos, beginPos,lastbegin)

   if (endPos>=beginPos){
   	return endPos - beginPos + 1
   } else{
   	if(endPos>=lastbegin){
   		return endPos-lastbegin+1
   	}else{
   		return 0
   	}
   }
   return 0
};

console.log(lengthOfLastWord("b   a    "))

console.log(lengthOfLastWord(""))
console.log(lengthOfLastWord("hello world"))
console.log(lengthOfLastWord("hello "))
console.log(lengthOfLastWord("     "))