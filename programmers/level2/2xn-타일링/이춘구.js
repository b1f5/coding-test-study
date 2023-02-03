// @ts-check
/**
 * @param {number} n 직사각형의 가로의 길이
 * @returns {number} 이 직사각형을 채우는 방법의 수
 */
function solution(n) {
  if (n < 4) return n;

  const dp = [1, 1, 2];

  for (let i = 3; i <= n; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
  }

  return dp.at(-1);
}
