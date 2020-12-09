/**
 * 简单的动态规划
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

    问总共有多少条不同的路径？

    输入：m = 3, n = 2
    输出：3
    解释：
    从左上角开始，总共有 3 条路径可以到达右下角。
    1. 向右 -> 向右 -> 向下
    2. 向右 -> 向下 -> 向右
    3. 向下 -> 向右 -> 向右

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/unique-paths
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let a = [];
    //m:y, n:x
    for (let i = 0; i < n; i++) {
        //纯横向一种走法
        a[i] = [];
        a[i][0] = 1;
    }
    for (let i = 0; i < m; i++) {
        //纯纵向一种走法
        a[0][i] = 1;
    }
    //处于x、y位置时，a[x][y]的路径总数是a[x-1][y] + a[x][y-1], 因为只有这两个地方可以到
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            a[i][j] = a[i-1][j] + a[i][j-1];
        }
    }
    return a[n-1][m-1]
};