/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 同59解法一致，模拟行进路线边界进行循环
 * 
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let height = matrix.length, width = matrix[0].length;
    let ans = []
    let left = 0, right = width - 1, top = 0, bottom = height - 1;
    let filled = 1, max = height * width;
    while (filled <= max) {
        for (let i = left; i <= right && filled <= max; i ++) {
            ans.push(matrix[top][i])
            filled += 1;
        }
        top += 1;
        for (let i = top; i <= bottom && filled <= max; i ++) {
             ans.push(matrix[i][right])
            filled += 1;
        }
        right -= 1;
        for (let i = right; i >= left && filled <= max; i --) {
             ans.push(matrix[bottom][i])
            filled += 1;
        }
        bottom -= 1
        for (let i = bottom; i >= top && filled <= max; i --) {
            ans.push(matrix[i][left])
            filled += 1
        }
        left += 1;
    }
    return ans;
};