/**
 * @see link https://leetcode-cn.com/problems/utf-8-validation/
 * @description 位运算会更好解决
 */

 function getBinaryString(data: number) {
    const ans = [];
    for (let i = 0; i < 8; i++) {
      ans.unshift(data % 2);
      data = Math.floor(data / 2);
    }
    return ans.join("");
  }
  
  function isValidUtf8(data: string[]): boolean {
    const regularReg = (val) => /^10/.test(val);
    if (data.length === 1) {
      return /^0/.test(data[0]);
    }
    if (data.length === 2) {
      return /^110/.test(data[0]) && regularReg(data[1]);
    }
    if (data.length === 3) {
      return /^1110/.test(data[0]) && regularReg(data[1]) && regularReg(data[2]);
    }
    if (data.length === 4) {
      return (
        /^11110/.test(data[0]) &&
        regularReg(data[1]) &&
        regularReg(data[2]) &&
        regularReg(data[3])
      );
    }
  }
  
  function validUtf8(data: number[]): boolean {
    const result = data.map(getBinaryString);
    console.log(result);
    while (result.length > 0) {
      const length = result.length > 4 ? 4 : result.length;
      for (let i = length; i >= 1; i--) {
        if (isValidUtf8(result.slice(0, i))) {
          result.splice(0, i);
          break;
        } else if (i === 1) {
          return false;
        }
      }
    }
    return true;
  }
  
  console.log(validUtf8([230,136,145])); // true
  console.log(validUtf8([197, 130, 1])); // expected true
  console.log(validUtf8([235, 140, 4])); // expected false