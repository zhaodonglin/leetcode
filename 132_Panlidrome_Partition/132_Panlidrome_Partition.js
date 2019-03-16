var minCut = function(s) {
    var len = s.length;
    
    //num[i] :min partition num for num[i]-num[n]
    var num = new Array(len);
    for (var i=0; i < len; i++){
        num[i] = len - i - 1;
    }
    //num[len] = 0;
    //p[i][j] shows s[i]-s[j] is palindrome or not.
    var p = new Array(len);
    for (var i = 0; i < len; i++){
        p[i] = new Array(len);
    }
    for (var i = 0; i < len; i++){
        for (var j = 0; j < len; j++){
            p[i][j] = false;
        }
    }
    
    //
    for (var i= len - 1; i >=0; i--){
        for (var j = i; j < len; j++){
            //console.log('i', i, 'j', j);
            if ((s[i] == s[j]) && ((j-i < 2) || p[i+1][j-1])){
                p[i][j] = true;
                //console.log('p', p[i][j], num[j+1], num[i], i, j);
                //console.log(num);
                if (j+1 < len){
                    if (num[i] > 1 + num[j+1]) {
                        num[i] = 1 + num[j+1];
                    }
                } else {
                    num[i] = 0;
                }

            }
        }  
    }
    
    return num[0];
};
