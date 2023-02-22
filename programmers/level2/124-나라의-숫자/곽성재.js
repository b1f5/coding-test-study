/**
 *
 * @param {number} n
 * @returns
 */
function solution(n) {
  let answer = "";
  const possible = ["4", "1", "2"];
  while (n) {
    answer = possible[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3); // 3으로 나눠떨어지면 -1을 아니면 몫 그대로 재할당
  }
  return answer;
}
