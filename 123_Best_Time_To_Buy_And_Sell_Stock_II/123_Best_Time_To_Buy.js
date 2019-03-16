var maxProfit = function(prices) {
	if (prices.length == 0){
		return 0;
	}
	var n = prices.length;
	var global = new Array(n);
	for (var i = 0; i < global.length; i++){
		global[i] = new Array(3);
		for(var j = 0; j <3; j++){
			global[i][j] = 0;
		}
	}
	var local = new Array(n);
	for (var i = 0; i < local.length; i++){
                local[i] = new Array(3);
		for(var j = 0; j < 3; j++){
			local[i][j] = 0;
		}	
	}
	
	for (var i = 1; i < prices.length; i++){
		var diff = prices[i]-prices[i-1];
		for (var j = 1; j<=2;j++){
			local[i][j] = Math.max(global[i-1][j-1] + Math.max(diff, 0), local[i-1][j] +  diff);
			global[i][j] = Math.max(local[i][j], global[i-1][j]);		
		}
	}
	return global[n-1][2];    
};






