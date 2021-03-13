/**
 * 
 * 三数之和： 双指针解法, 先排序，多了减右窗，少了增左窗
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

	示例：

	输入：nums = [-1,2,1,-4], target = 1
	输出：2
	解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/3sum-closest
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const getAbs = (val) => Math.abs(val);

var threeSumClosest = function(nums, target) {
    let minGap;
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += nums[i];
        minGap = target - sum;
    }
    nums.sort((pre, next) => pre - next);
    for (let i = 0; i < nums.length; i++) {
        let head = i + 1;
        let tail = nums.length - 1;
        while (head < tail) {
            let tempSum = nums[i] + nums[head] + nums[tail];
            let current = target - tempSum;
            minGap = getAbs(current) < getAbs(minGap) ? target - tempSum : minGap;
            if (tempSum > target) {
                tail -= 1;
            }
            if (tempSum < target) {
                head += 1;
            }
            if (tempSum === target) {
                return target;
            }
        }
    }
    return target - minGap;
};