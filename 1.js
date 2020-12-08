/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const length = nums.length;
    for (let i = 0; i < length - 1; i ++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

/**
 * better solution for 2
 * nums = [2, 7, 11, 15], target = 9
 * got: { 7: 0 }, that means when you get a seven, map.get(0) would match
 * the answer since the key is the target left for the value (index of nums)
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            return [numMap.get(nums[i]), i];
        }
        numMap.set(target - nums[i], i);
    }
    return [];
};