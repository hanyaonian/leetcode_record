/**
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。

   如果不存在公共前缀，返回空字符串 ""。

 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        //empty list
        return "";
    }
    //前缀检查字母
    let checkIndex = 0;
    //公共前缀字母集
    let publicPrefix = [];
    let minLength = Math.min(...strs.map(str => str.length));
    //获取最小长度
    while (checkIndex < minLength) {
        let [firstString] = strs;
        let tempStr = firstString[checkIndex];
        if (strs.every(str => str[checkIndex] === tempStr)) {
            publicPrefix.push(tempStr);
            checkIndex += 1;
        } else {
            break;
        }
    }
    return publicPrefix.join('');
};