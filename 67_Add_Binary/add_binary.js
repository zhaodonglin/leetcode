var addBinary = function(a, b) {
   var arr1 = a.split('')
   var arr2 = b.split('')
   var carry = 0
   var sum = 0
   var new_arr = new Array()

   var val =0
   for(var i =arr1.length-1,j=arr2.length-1; i>=0 && j>=0;i--,j--){
   	     // sconsole.log(i,j, new_arr)
   		sum = parseInt(arr1[i]) + parseInt(arr2[j]) + carry
   		// console.log('sum', sum)
   		if (sum == 3){
   			carry = 1
   			val = 1
   		} else if(sum == 2){
   			carry =1
   			val = 0
   		}else{
   			carry=0
   			val = sum
   		}
   		// console.log('v',val)
   		new_arr.unshift(val)
   		console.log(i,j, new_arr)
   		sum = 0
   }

   if (i!=-1){
   	
   	   for (var k = i;k>=0;k--){
   	   	// console.log('k',k,carry,new_arr, arr1[k])
   	   	  sum = parseInt(arr1[k]) + carry
   	   	  if (sum == 2) {
   	   	  	carry =1
   	   	  	val =0
   	   	  }else{
   	   	  	carry=0
   	   	  	val = sum
   	   	  }
   	   	  new_arr.unshift(val)
   	   	  sum = 0
   	   }
   }
   //console.log(carry,new_arr)

	//console.log(new_arr)

   if (j!=-1){
   	console.log(j,new_arr)
   		for (var k = j;k>=0;k--){
			  sum = parseInt(arr2[k]) + carry
	   	   	  if (sum == 2) {
	   	   	  	carry =1
	   	   	  	val =0
	   	   	  }else{
	   	   	  	carry=0
	   	   	  	val = sum
	   	   	  }
	   	   	  new_arr.unshift(val)
	   	   	  sum = 0
   		}
   }
	if (carry == 1){
		new_arr.unshift(carry)
		carry =0
	}
   return new_arr.join('')
};


console.log(addBinary("11", "1"))
console.log(addBinary("11", "10"))
console.log(addBinary("111", "10"))
console.log(addBinary("1011", "10"))
console.log(addBinary("111", "1"))
console.log(addBinary("1", "111"))
// a1 = new Array()
// a1.push(1)
// a1.push(2)
// console.log(a1)