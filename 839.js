/**
 * 
 * 并查集 困难
 * 如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。

	例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "tars"，"rats"，或 "arts" 相似。

	总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。

	给你一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个字母异位词。请问 strs 中有多少个相似字符串组？
 */

var numSimilarGroups = function(strs) {
    // 建立二维数组. 记录点线关系
    let matrix = [];
    // 起初每个点只连自己
    for (let i = 0; i < strs.length; i++) {
        matrix.push(i);
    }
    const findPoint = (x) => {
        if (matrix[x] === x) {
            return x; //自连
        } else {
            matrix[x] = findPoint(matrix[x]); // 两点互联，用来做组的自连
            return findPoint(matrix[x])
        }
    }
    for (let i = 0; i < strs.length; i++) {
        for (let j = i + 1; j < strs.length; j++) {
            if (findPoint(i) === findPoint(j)) {
                // 已连
                continue;
            }
            if (compare(strs[i], strs[j])) {
                // i 与 j 互联
                matrix[findPoint(i)] = findPoint(j);
            }
        }
    }
    // 记录比较关系
    let ans = 0;
    for (let i = 0; i < strs.length; i++) {
        ans += i === matrix[i] ? 1 : 0;
    }
    return ans;
};

function compare(strA, strB) {
    let count = 0;
    for (let i = 0; i < strA.length; i ++) {
        if (strA[i] !== strB[i]) {
            count += 1;
        }
    }
    return count === 2 || count === 0;
}