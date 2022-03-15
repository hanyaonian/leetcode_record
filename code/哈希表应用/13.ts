/**
 * @see https://leetcode-cn.com/problems/roman-to-integer/
 */

function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let pre = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap[s[i]] < romanMap[s[i + 1]] && i !== s.length - 1) {
      pre -= romanMap[s[i]];
    } else  {
      pre += romanMap[s[i]]
    }
  }
  return pre;
}

console.log(romanToInt("III"));      // 3
console.log(romanToInt("IV"));       // 4
console.log(romanToInt("IX"));       // 9
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994