/**
 * 
 * 解法：很容易联想到先排序，然后再按顺序进行合并
 * 
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((pre, next) => pre[0] - next[0]);
    let [firstInterval] = intervals;
    let ans = [firstInterval], current = 0, len = intervals.length;
    for (let i = 0; i < len; i++) {
        let curr = ans[current];
        let temp = intervals[i];
        if (curr[1] < temp[1] && curr[1] >= temp[0]) {
            curr[1] = temp[1];
        } else if (curr[1] < temp[0]) {
            current += 1;
            ans.push(temp);
        }
    }
    return ans;
};