var longestConsecutive = function(nums) {
    var set1 = new Set(nums);
    var res = 0;
    for (var i= 0; i< nums.length; i++){
        if (!set1.has(nums[i])){continue;}
        prev = nums[i]-1;
        next = nums[i]+1;
        while (set1.has(prev)){set1.delete(prev); prev--;}
        while(set1.has(next)){set1.delete(next); next++;}
        res =  Math.max(res, next-prev-1);
    }
    return res;
};
