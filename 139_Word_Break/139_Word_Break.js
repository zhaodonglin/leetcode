/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordIsInDict = function(word, word_map){
    if ( word_map.get(word) == undefined){
        word_map.set(word, false);
    }
    return word_map.get(word);
};

var helper = function(s, word_map, cache_res){
    if (wordIsInDict(s, word_map)){
        return true;
    }
    
    for (var i = 1; i <= s.length; i++) {
        var word = s.slice(0, i);
        if (wordIsInDict(word, word_map)) {
            var rest = s.slice(i);
            var res = cache_res.get(rest);
            if (res == undefined){
                if  (helper(rest, word_map, cache_res)) {
                    cache_res.set(rest, true);
                    return true;
                } else {
                    cache_res.set(rest, false);
                }
            }
        }
    }
    return false;
};

var wordBreak = function(s, wordDict) {
    var word_map = new Map();
    for (var i= 0; i < wordDict.length; i++){
        word_map.set(wordDict[i], true);
    }
    var cache_res = new Map();
    return helper(s, word_map, cache_res);
};
