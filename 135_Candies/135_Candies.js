/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candies = new Array(ratings.length);
    for (var i = 0; i < candies.length; i++){
        candies[i] = 1;
    }
    
    for (var i =0; i < ratings.length-1; i++){
        //console.log("i", i, candies);
        if (ratings[i+1] > ratings[i]) {
            candies[i+1] = candies[i] + 1;
        }
    }
    
    for (var i =ratings.length -1; i >0 ;i--){
        if (ratings[i] < ratings[i-1]){
            if (candies[i]+1 > candies[i-1]){
                candies[i-1] = candies[i]+1; 
            }
        }
    }
    
    var sum = 0;
    for (var i = 0; i < candies.length; i++){
        sum += candies[i];
    }
    //console.log(candies);
    //console.log("sum", sum)
    return sum;
};

candy([1,3,4,5,2])
