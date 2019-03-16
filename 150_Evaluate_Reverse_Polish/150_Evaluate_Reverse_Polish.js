var evalRPN = function(tokens) {
    var stk = new Array();
    for(var i = 0; i < tokens.length; i++){
        var t = tokens[i];
        if (!isNaN(t)){
            stk.push(parseInt(t));
        } else{
            var n1 = stk.pop();
            var n2 = stk.pop();
            if (t == '+'){

                stk.push(n1+n2);
            }else if (t == '-'){
                stk.push(n2-n1);
            }else if (t == '*'){
                stk.push(n2*n1);
            }else{
                if ((n1*n2)>0){
                    stk.push(Math.floor(n2/n1));
                } else{
                    stk.push(Math.ceil(n2/n1));
                }
                
            }
        }
    }
    return stk.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));