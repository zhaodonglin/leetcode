var getMin = function(triangle){
        var min = triangle[0];
        for (var i = 0; i < triangle.length; i++){
                if (min > triangle[i]){
                        min = triangle[i];
                }
        }
        return min;
}

var minimumTotal = function(triangle) {
        var sum = 0;
        for (var i = 1; i < triangle.length; i++){
                for (var j = 0; j < triangle[i].length; j++){
                    //console.log(i,j)
                        if (j == 0){
                                triangle[i][j] = triangle[i-1][j] + triangle[i][j];
                        }
                        else if (j == triangle[i].length-1){
                                triangle[i][j] = triangle[i-1][j-1] + triangle[i][j];
                        }else {
                                triangle[i][j] = Math.min(triangle[i-1][j-1], triangle[i-1][j]) + triangle[i][j];
                        }
                }       
        }
        return getMin(triangle[triangle.length-1]);
};

