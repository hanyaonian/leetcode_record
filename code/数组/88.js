/**
 * 
	给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

	说明：

	初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
	你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
	 
	示例：

	输入：
	nums1 = [1,2,3,0,0,0], m = 3
	nums2 = [2,5,6],       n = 3

	输出：[1,2,2,3,5,6]

	提示：
	-10^9 <= nums1[i], nums2[i] <= 10^9
	nums1.length == m + n
	nums2.length == n

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 解法1
// Space: O(log(m+n))
// Time: O((m+n)log(m+n))
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);
  nums1.push(...nums2);
  nums1.sort((pre, next) => pre - next);
};

var merge2 = function (nums1, m, nums2, n) {
  const total = m + n;
  const new_arr = new Array(total).fill(0);
  let pointer1 = 0,
    pointer2 = 0,
    i = 0;
  while (i < total) {
    const left_num = nums1[pointer1];
    const right_num = nums2[pointer2];
    if (right_num === undefined) {
      pointer1 += 1;
      new_arr[i] = left_num;
    } else if (left_num === undefined) {
      pointer2 += 1;
      new_arr[i] = right_num;
    } else if (left_num <= right_num && pointer1 < m) {
      new_arr[i] = left_num;
      pointer1 += 1;
    } else {
      new_arr[i] = right_num;
      pointer2 += 1;
    }
    i += 1;
  }
  for (let i = 0; i < total; i++) {
    nums1[i] = new_arr[i];
  }
};

/**
 * TEST CASE
 */
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

merge2(nums1, 3, nums2, 3);

console.log(nums1);
