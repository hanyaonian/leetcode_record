/**
 * 
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
    示例：

    输入：S = "ababcbacadefegdehijhklij"
    输出：[9,7,8]
    解释：
    划分结果为 "ababcbaca", "defegde", "hijhklij"。
    每个字母最多出现在一个片段中。
    像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 * 
 * 
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const ans = [];
    let start = 0;
    let boundary = 0;
    const charMap = new Map();
    //记录各个字符的位置
    for (let i = 0; i < S.length; i++) {
        charMap.set(S[i], i);
    };
    for (let i = 0; i < S.length; i++) {
        //当前字母最大区间
        let current = charMap.get(S[i]);
        //查看有无更大区间
        boundary = Math.max(boundary, current);
        if (boundary === i) {
            //到达边界
            ans.push(boundary - start + 1);
            start = boundary + 1;
        }
    }
    return ans;
};