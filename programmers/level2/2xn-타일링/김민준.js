function solution(n) {
  const DIVISOR = 1e9 + 7;
  let dp = [0, 1, 2];

  for(let i=3; i<=n; i+=1) {
    dp[i] = (dp[i-2] + dp[i-1]) % DIVISOR;
  }

  return dp[n];
}

const n = 4;
const result = solution(n);
console.log(result);