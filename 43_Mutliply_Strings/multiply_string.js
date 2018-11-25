var multiply = function(num1, num2) {
    var n1 = num1.split("")
    var n2 = num2.split("")

    var k = n1.length + n2.length - 2
    var m = new Array(n1.length+n2.length);
    for (var i =0; i<=n1.length+n2.length-1;i++){
    	m[i] = 0
    }

    for(var i = 0; i < n1.length; i++){
    	for (var j = 0; j<n2.length; j++){
    		m[k-i-j] += n1[i]*n2[j]
    	}
    }

console.log(m)
    var carry=0
    for (var index = 0; index <= n1.length+n2.length-1; index++){
    	m[index] += carry
    	carry = Math.floor(m[index] /10)
    	m[index] = Math.floor(m[index]%10)
    	//console.log(carry, m[index])
    }


    var k = n1.length+n2.length-1

    while(m[k]==0){
    	k--
    }

    if (k <0) {
    	return "0"
    }

    var res=""
    while(k>=0){

		res = res + m[k].toString()
		k--
    }
	
    return res.toString()
};


//console.log(multiply("123456789", "987654321"))

