/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
进阶：
一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？

解法：通过set标记清0的行列，最后清零。

 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowSet = new Set(), colSet = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }
    rowSet.forEach(row => {
        colSet.forEach(col => {
            clearMatrix(matrix, row, col);
        })
    });
};

function clearMatrix(matrix, row, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
}