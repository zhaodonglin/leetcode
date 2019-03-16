/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.limit = capacity;
    this.map = {};
    this.head = null;
    this.tail = null;
};

LRUCache.prototype.lrunode = function(key, value){
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

LRUCache.prototype.setHead = function(node){
    node.next = this.head;
    node.prev = null;
    if (this.head != null){
        this.head.prev = node;
    }
    this.head = node;
    if(this.tail == null){
        this.tail = node;
    }
    this.size++;
    this.map[node.key] = node;
}

LRUCache.prototype.put = function(key, value){
    var node = new LRUCache.prototype.lrunode(key,value);
    if (this.map[key]){
        //this.map[key].value = node.value;
        this.remove(node.key);
    } else{
        if (this.size >= this.limit){
            delete this.map[this.tail.key];
            this.size--;
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.setHead(node);
} 
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]){
        var value = this.map[key].value;
        var node = new LRUCache.prototype.lrunode(key, value);
        this.remove(key);
        this.setHead(node);
        return value;
    }else{
        console.log("Key " + key + " does not exist in the cache.")
    }
};

LRUCache.prototype.remove = function(key){
    var node = this.map[key];
    if (node.prev != null){
        node.prev.next = node.next;
    }else{
        this.head = node.next;
    }
    if (node.next!= null){
        node.next.prev = node.prev;
    }else{
        this.tail = node.prev;
    }
    delete this.map[key];
    this.size--;
}

lru = new LRUCache(2);

lru.put(1,1)
lru.put(2,2);
//lru.put(2,3);

console.log(lru.get(1));
console.log(lru.get(2));

console.log(lru.get(1));
console.log(lru.get(2));

