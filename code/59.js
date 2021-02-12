/**
 * 螺旋矩阵。
 * 解： 模拟行进路线
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let height = n, width = n;
    let matrix = [];
    for (let i = 0; i < width; i++) {
        matrix.push(new Array(height).fill(0));
    }
    // 设定边际
    let left = 0, right = width - 1, top = 0, bottom = height - 1;
    let filled = 1, max = height * width;
    while (filled <= max) {
        // 模拟螺旋 1. 左-右 2. 上-下 3. 右-左 4. 下-上
        for (let i = left; i <= right; i ++) {
            matrix[top][i] = filled;
            filled += 1;
        }
        top += 1;
        for (let i = top; i <= bottom; i ++) {
            matrix[i][right] = filled;
            filled += 1;
        }
        right -= 1;
        for (let i = right; i >= left; i --) {
            matrix[bottom][i] = filled;
            filled += 1;
        }
        bottom -= 1
        for (let i = bottom; i >= top; i --) {
            matrix[i][left] = filled;
            filled += 1
        }
        left += 1;
    }
    return matrix;
};