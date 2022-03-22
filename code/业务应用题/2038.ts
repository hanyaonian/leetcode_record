/**
 * @see https://leetcode-cn.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/
 */
function winnerOfGame(colors: string): boolean {
  let op = 0;
  for (let i = 1; i < colors.length - 1; i++) {
      if (colors[i - 1] === 'A' && colors[i] === 'A' && colors[i + 1] === 'A') {
          op += 1;
      }
      if (colors[i - 1] === 'B' && colors[i] === 'B' && colors[i + 1] === 'B') {
          op -= 1;
      } 
  }
  return op > 0;
};