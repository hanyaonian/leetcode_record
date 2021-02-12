// 这题是word-match-helper的基础，就不需要多说了。


/**
 * 
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

	示例:

	Trie trie = new Trie();

	trie.insert("apple");
	trie.search("apple");   // 返回 true
	trie.search("app");     // 返回 false
	trie.startsWith("app"); // 返回 true
	trie.insert("app");   
	trie.search("app");     // 返回 true
	
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
        child: {},
        isMatch: false,
        val: null
    }
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let len = word.length;
    let tempRoot = this.root;
    for (let i = 0; i < len; i++) {
        if (!tempRoot.child.hasOwnProperty(word[i])) {
            tempRoot.child[word[i]] = {
                child: {},
                isMatch: false,
                val: word[i]
            }
        }
        tempRoot = tempRoot.child[word[i]];
        if (i === len - 1) {
            tempRoot.isMatch = true;
        }
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    let len = word.length;
    for (let i = 0; i < len; i++) {
        if (currentNode.child.hasOwnProperty(word[i])) {
            currentNode = currentNode.child[word[i]];
        } else {
            return false;
        }
    }
    return currentNode.isMatch;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    let len = prefix.length;
    for (let i = 0; i < len; i++) {
        if (currentNode.child.hasOwnProperty(prefix[i])) {
            currentNode = currentNode.child[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */