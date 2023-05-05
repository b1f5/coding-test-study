/**
 *
 * @param {string[]} orders
 * @param {number[]} course
 * @returns {string[]}
 */
function solution(orders, course) {
  var answer = [];
  let candidates = [];
  const board = {};
  for (const order of orders) {
    const ch = Array.from({ length: order.length }).fill(false);
    const dfs = (L) => {
      if (L === order.length) {
        let temp = "";
        for (let i = 0; i < ch.length; i++) {
          if (ch[i] === true) {
            temp += order[i];
          }
        }
        if (temp.length === 1 || temp === "") return;
        candidates.push(temp);
        if (candidates.some((el) => el === temp)) {
          board[temp] = board[temp] === undefined ? 1 : board[temp] + 1;
        }
      } else {
        ch[L] = true;
        dfs(L + 1);
        ch[L] = false;
        dfs(L + 1);
      }
    };
    dfs(0);
  }
  candidates.sort((a, b) => a.length - b.length);
  // candidates.sort();
  // console.log(candidates.sort((a, b) => a.length - b.length));
  // console.log(getCount(candidates));
  // console.log(candidates.filter((el) => el.length === 2));
  // for (const cnt of course) {
  // console.log(getCount(cand/idates.filter((el) => el.length === cnt)));
  // }
  console.log(candidates);
  console.log(board);
  return answer;
}

// prettier-ignore
// console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])); // ["AC", "ACDE", "BCFG", "CDE"]
// prettier-ignore
console.log(solution(["XYZ", "XWY", "WXA"],	[2,3,4])); // ["AC", "ACDE", "BCFG", "CDE"]
