/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

解：挺简单的，行列对应旋转即可，用一个辅助数组去记录
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 新矩阵
    let n = matrix.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(new Array(n).fill(0))
    }
    let row = 0, col = n - 1;
    while (row < n) {
        for(let i = 0; i < n; i++) {
           arr[i][col] = matrix[row][i]
        }
        col -= 1;
        row += 1;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = arr[i][j]
        }
    }
};