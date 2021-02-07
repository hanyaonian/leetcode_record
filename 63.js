/**
 * 解：动态规划，[i][j]的结果来源于 i-1j与 ij-1，设定两个边界即可。
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
	机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
	现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let ans = new Array(obstacleGrid.length);
    for (let i = 0; i < obstacleGrid.length; i++) {
        ans[i] = new Array(obstacleGrid[0].length).fill(0)
    }
    for (let i = 0; i < obstacleGrid.length; i ++) {
        // 后续路线不通，包括起点
        if (obstacleGrid[i][0] === 1) {
            break;
        }
        // 最左侧只有一种走法
        ans[i][0] = 1;
    }
    for (let i = 0; i < obstacleGrid[0].length; i ++) {
        if (obstacleGrid[0][i] === 1) {
            break;
        }
        // 最上侧只有一种走法
        ans[0][i] = 1;
    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j ++) {
            // 动规， 路线为上面的路线的和
            ans[i][j] = (ans[i - 1][j] || 0) + (ans[i][j - 1] || 0);
            if (obstacleGrid[i][j] === 1) {
                ans[i][j] = 0;
            }
        }
    }
    return ans[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};