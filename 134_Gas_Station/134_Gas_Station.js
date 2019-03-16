var canCompleteCircuit = function(gas, cost) {
    var max_res = gas[0] - cost[0];
    var startPos = new Array();
    
    for (var i = 0; i < gas.length; i++){
        var diff = gas[i] - cost[i];
        
        if (max_res < diff){
            max_res = diff;
        }
        if (diff >=0){
            startPos.push(i)
        }
    }
    //console.log(start,max_res);
    if (max_res < 0){
        return -1;
    }
    for (var i = 0 ; i< startPos.length; i++){
        if (canStart(startPos[i], gas, cost)){
            return startPos[i];
        }
    }

  
    return -1;
};
var canStart = function(start, gas, cost){
    var count = 0;
    var res = 0;
    var i = start;
    while(count < gas.length){
        res = res + gas[i] - cost[i];
        if (res < 0){
            return false;
        }
        i++;
        count++;
        if (i == gas.length){
            i = 0;
        }
    }
    
    return true;
};
