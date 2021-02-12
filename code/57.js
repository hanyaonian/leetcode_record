/**
 * 
 * 解法：和56一样
 * 
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

	在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

	 

	示例 1：

	输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
	输出：[[1,5],[6,9]]
	示例 2：

	输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
	输出：[[1,2],[3,10],[12,16]]
	解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

 * 
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 记得js里的splice可以用来insert, replace, delete
    let len = intervals.length, insertIndex = len;
    for (let i = 0; i < len; i++) {
        if (intervals[i][0] >= newInterval[0]) {
            insertIndex = i
            break;
        }
    }
    // 直接最右侧插入
    intervals.splice(insertIndex, 0, newInterval);
    // 合并重叠部分
    // 56的答案直接复制过来了，省略掉排序那一步
    return merge(intervals);
};

function merge(intervals) {
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
}