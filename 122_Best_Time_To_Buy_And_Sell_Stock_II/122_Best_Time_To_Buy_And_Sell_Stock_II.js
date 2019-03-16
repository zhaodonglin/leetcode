var maxProfit = function(prices) {
    	var sum = 0;
	for (var i = 1; i <prices.length;i++){
		if (prices[i]>prices[i-1]){
			sum += prices[i] - prices[i-1];
		}
	}
	return sum;   
};


console.log(maxProfit([7,1,5,3,6,4]))
