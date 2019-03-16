var getRow = function(numRows) {
    var number = new Array();
    
    for (var i= 0; i < numRows+1; i++){
        number[i] = new Array(i+1);
        
        number[i][0] = 1;
        number[i][i] =1;
        for (var k = 1; k< i; k++){
            number[i][k] = number[i-1][k-1] + number[i-1][k];
        }
    }
    return number[numRows];
};
