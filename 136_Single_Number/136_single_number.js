var singleNumber = function(nums) {
    var res = 0;
    for (var i = 0; i < nums.length; i++){
        res = res ^ nums[i];
    }
    return res;
};
