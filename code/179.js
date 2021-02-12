/**
 * 179. 最大数
	给定一组非负整数 nums，重新排列它们每个数字的顺序（每个数字不可拆分）使之组成一个最大的整数。
	注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
	示例 1：
	输入：nums = [10,2]
	输出："210"
	示例 2：
	输入：nums = [3,30,34,5,9]
	输出："9534330"
 * 
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // js 的sort默认是按字符串来，所以直接sort似乎就好了？
    // 不行，3要在30前面，在34后面，要重写comapre
    let ans = nums.sort((pre, next)=> {
        let a = pre.toString(), b = next.toString();
        return (b + a) - (a + b);        
    });
    while (ans[0] === 0) {
        ans.shift();
    }
    return ans.join('') || '0';
};