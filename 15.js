/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

    注意：答案中不可以包含重复的三元组。

    给定数组 nums = [-1, 0, 1, 2, -1, -4]，

    满足要求的三元组集合为：
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/3sum
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

 /**
  *  
  *    双指针解法（三指针，最左侧指针为一次循环）
  * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    nums.sort((pre, next)=> pre - next);
    for (let i = 0; i < nums.length; i++) {
        //i 左指针， tail 右指针， head 中间指针
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        if (nums[i] > 0) {
            //左指针应该小于等于0
            break;
        }
        let tail = nums.length - 1;
        let head = i + 1;
        while (head < tail) {
            let sum = nums[head] + nums[tail] + nums[i];
            if (sum < 0) {
                head += 1;
            } else if (sum > 0) {
                tail -= 1;
            } else {
                ans.push([nums[i], nums[head], nums[tail]]);
                tail -= 1;
                head += 1;
                while (nums[tail] === nums[tail + 1]) {
                    tail -= 1;
                }
                while (nums[head] === nums[head - 1]) {
                    head += 1;
                }
            }
        }
    }
    return ans;
};