
var subdivide = function(dividend, divisor){
     var single = divisor 
     var res = 0 
     var p = 1

     if (divisor > dividend) {
          return 0 
     }

     while(dividend >= divisor) {
          dividend = dividend - divisor
          res = res + p
          p = p *2
          divisor = divisor * 2

              
     }
 

     return res +  subdivide(dividend,single)     
}

var divide = function(dividend, divisor) {
     var p = 1
     var sign = (dividend>0 && divisor <0) || (dividend<0 && divisor> 0)? -1:1
     
     if (divisor === -1 && dividend === Math.pow(-2,31)){
          //console.log("enter", 2<<<31 - 1, 2<<<30)
          return Math.pow(2,31)-1
     }

     dividend = Math.abs(dividend)
     
     divisor = Math.abs(divisor)
     
     return sign * subdivide(dividend, divisor)  
};

//console.log(divide(-2<<31, -1))
console.log("res", divide(7,-3))
console.log("res", divide(10,3))
console.log(divide(-2147483648, -1))
console.log("res",divide(2147483647, 1))
