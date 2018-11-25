var trap = function(height) {
   dp = new Array()
   var maxVal = 0
   var res = 0

   for (var i=0; i< height.length; i++){
   		maxVal = Math.max(height[i], maxVal)
   		dp[i] = maxVal
   }
   
   var maxVal = 0
   for(var i= height.length-1; i>=0; i--){
   		maxVal = Math.max(height[i], maxVal)
   		curVal = Math.min(dp[i], maxVal)

   		if (curVal > height[i]){
   			res += curVal - height[i]
   		}
   		
   }
   //console.log(res)
   return res
};


trap([0,1,0,2,1,0,1,3,2,1,2,1])