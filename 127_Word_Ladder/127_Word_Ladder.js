var cmpWords = function(word, word1){
	var diff = 0;
	for (var i = 0 ; i < word.length;i++){
		if (word[i] != word1[i]){
			diff += 1;
		}
	}
	return diff==1;
};
var closetWords = function(word, wordList){
	var arr1 = new Array();
	for (var i = 0; i < wordList.length; i++){
		word1 = wordList[i];
		//console.log("cmp",word, word1,cmpWords(word, word1));
		if (cmpWords(word, word1)){
			arr1.push(word1);
		}	
	}
	return arr1;
};
function elem( val, next, prev){
	this.val = val;
	this.next = next;
	this.prev = prev;
};
var process_cur_word = function(node, next_words){
     	var nodes = generateNodes(next_words, node);
      	node.next = node.next.concat(nodes);
	return nodes;
};
var generateNodes = function(cur_words, prev){
	var nodes = new Array();
	for (var i = 0; i < cur_words.length; i++){
		var e = new elem(cur_words[i],new Array(),prev);
		nodes.push(e);
	}
	return nodes;
};
var is_end_word = function(end_word, next_words){
	for (var i = 0; i < next_words.length; i++){
		if (end_word == next_words[i]) {
			return true;
		}
	}
	return false;
};
var add_to_result = function(node, beginWord, endWord, result_paths){
	var path = new Array();
	
	while(node != null) {
		path.unshift(node.val);
		node = node.prev;
	}
	path.unshift(beginWord);
	path.push(endWord);
        result_paths.push(path.slice(0));
};
var filter_words = function(search_words, next_words){
	var filtered = new Array();
	var is_searched = false;
	for (var i = 0; i< next_words.length; i++){
		is_searched = false;
		for (var j = 0; j < search_words.length; j++){
			if (search_words[j] == next_words[i]) {
				is_searched = true;
				break;	
			}	
		}
		if (!is_searched) {
			filtered.push(next_words[i]);	
		}
	}
	
	return filtered;
};
var findLadders = function(beginWord, endWord, wordList) {
	var cur_words = new Array();
	var search_words = new Array();

	cur_words = closetWords(beginWord, wordList);
    if (is_end_word(endWord, cur_words)){
       // console.log("is_end_word")
        var a1 = new Array();
        a1.push(beginWord);
        a1.push(endWord);
		return 1;
	}
	nodes = generateNodes(cur_words, null).slice(0);
	search_words = search_words.concat(cur_words);

	while(1) {	
		var next_words = new Array();
		var new_nodes = new Array();
		var is_end_word_find = false;
		var result_paths = new Array();
		var cum_words = new Array();
		//console.log("nodes.length", nodes.length);
		for(var i = 0; i < nodes.length; i++){
			//console.log("i", i, "nodes", nodes, "search_words", search_words);
			var cur_word = nodes[i].val;
			var next_words = closetWords(cur_word, wordList);
			//console.log(next_words);
			next_words = filter_words(search_words, next_words);
			//console.log("next_words", next_words);

		        //console.log("nodes.length", nodes.length);
			if(is_end_word(endWord, next_words)) {
				is_end_word_find = true;
				add_to_result(nodes[i], beginWord, endWord, result_paths);
			}
		
		        //console.log("nodes.length", nodes.length);
			next_nodes = process_cur_word(nodes[i], next_words).slice(0);
			//console.log("getted", next_nodes);
		       // console.log("nodes", nodes);	
		       // console.log("nodes.length", nodes.length);
			new_nodes = new_nodes.concat(next_nodes);
			//console.log("new_nodes",new_nodes);
			//console.log("out of cycle", i, nodes.length);
			cum_words = cum_words.concat(next_words);
		}	
		
		search_words = search_words.concat(cum_words);
		if (new_nodes.length == 0){return 0;}
		nodes = new_nodes.slice(0);	
		if (is_end_word_find){return result_paths[0].length -1;}
		i = 0;
	}
	
};
