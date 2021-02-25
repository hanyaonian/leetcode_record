/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
	岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
	此外，你可以假设该网格的四条边均被水包围。

	示例 1：
	输入：grid = [
	["1","1","1","1","0"],
	["1","1","0","1","0"],
	["1","1","0","0","0"],
	["0","0","0","0","0"]
	]
	输出：1

 * 解法：搜索+标记连续板块为目标. 

 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0;
    if (!grid) {
        return ans;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                searchGrid(grid, i, j);
                ans += 1;
            }
        }
    }
    return ans;
};

// 标记走过的路线
function searchGrid(grid, i, j) {
    let height = grid.length, width = grid[0].length;
    if (i < height && i >= 0 && j >= 0 && j < width) {
        if (grid[i][j] === '1') {
            grid[i][j] = 'island';
            // 寻找连续点
            searchGrid(grid, i + 1, j);
            searchGrid(grid, i - 1, j);
            searchGrid(grid, i, j + 1);
            searchGrid(grid, i, j - 1);
        }    
    } else {
        return;
    }
}