var singleNumber = function(nums) {
    var a = 0;
    var b = 0;
    for (var i = 0; i < nums.length; i++){
        b = b^nums[i] & ~a;
        a = a^nums[i] & ~b;
    }
    return b;
};
