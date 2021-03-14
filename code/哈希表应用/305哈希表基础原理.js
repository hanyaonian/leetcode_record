/**
 * 
 * 不使用任何内建的哈希表库设计一个哈希集合（HashSet）。
	void add(key) 向哈希集合中插入值 key 。
	bool contains(key) 返回哈希集合中是否存在这个值 key 。
	void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

	通过简单哈希方法得到key，哈希冲突后拓展

 * Initialize your data structure here.
 */
const HASH_SIZE = 1000;

var MyHashSet = function() {
    // 每个都返回一个空数组or链表头节点
    this.data = new Array(HASH_SIZE).fill(0).map(()=> []);
};

// hash key
MyHashSet.prototype.getKey = function(key) {
    return key % HASH_SIZE;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let i = this.getKey(key);
    if (this.data[i].indexOf(key) === -1) {
        this.data[i].push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let i = this.getKey(key);
    if (this.data[i].indexOf(key) !== -1) {
        this.data[i].splice(this.data[i].indexOf(key), 1);
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let i = this.getKey(key);
    return this.data[i].indexOf(key) !== -1;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */