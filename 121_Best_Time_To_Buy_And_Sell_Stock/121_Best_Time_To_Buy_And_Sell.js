var maxProfit = function(prices) {
	if (prices.length < 2){
		return 0;
	}
	var max_profit =prices[1]-prices[0];
	for (var i= 0;i <prices.length-1;i++){
		
		for (var j= i+1; j<prices.length;j++){
			if (max_profit < prices[j]-prices[i]){
				max_profit = prices[j] -  prices[i];
			}
		}	
	}
	return max_profit<0? 0:max_profit;    
};


console.log(maxProfit([7,1,5,3,6,4]))
