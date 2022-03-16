/**
 * @see https://leetcode-cn.com/problems/sum-swap-lcci/
 */

function findSwapValues(array1: number[], array2: number[]): number[] {
  // sum1 - a + b = sum2 - b + a
  // sum2 - sum1 = gap = 2b - 2a
  // gap = 2b - 2a
  const sum1 = array1.reduce((pre, cur) => cur + pre, 0);
  const sum2 = array2.reduce((pre, cur) => cur + pre, 0);
  const gap = sum2 - sum1;
  const ans = [];
  const set1 = Array.from(new Set(array1));
  const set2 = Array.from(new Set(array2));
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if ((2 * set2[j]) - (2 * set1[i]) === gap) {
        return [set1[i], set2[j]];
      }
    }
  }
  return [];
};