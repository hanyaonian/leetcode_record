/**
 * 很简单，记录某个点最小路径和即可。
 * 
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

	说明：每次只能向下或者向右移动一步。
 * 
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let ans = [];
    for (let i = 0; i < m; i++) {
        ans.push(new Array(n).fill(0))
    }
    // 设置边界
    ans[0][0] = grid[0][0]
    for (let i = 1; i < m; i ++) {
        ans[i][0] = grid[i][0] + ans[i - 1][0] || 0;
    }
    for (let i = 1; i < n; i ++) {
        ans[0][i] = grid[0][i] + ans[0][i - 1] || 0;
    }
    // 计算最小路径
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            ans[i][j] = Math.min(ans[i-1][j] + grid[i][j], ans[i][j - 1] + grid[i][j])
        }
    }
    return ans[m - 1][n - 1];
};