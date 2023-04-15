const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

/**
 * dp를 이용한 풀이
 */
console.log(dp(n));

function dp(n) {
  if (n === 1) return 0;

  const cache = [0, 0, 1, 1];

  for (let i = 4; i <= n; i += 1) {
    const candidates = [];

    if (i % 3 === 0) candidates.push(cache[i / 3]);
    if (i % 2 === 0) candidates.push(cache[i / 2]);
    candidates.push(cache[i - 1]);

    const min = Math.min(...candidates);
    cache.push(min + 1);
  }

  return cache[cache.length - 1];
}

/**
 * chatGPT가 알려준 더 빠르고 메모리도 적게 먹는 방법.
 * 숫자 3개를 담아둘 배열을 선언하지 않아 메모리가 덜 들고,
 * 숫자 3개를 한번에 비교하지 않아서 더 빠른 것 같다.
 */
console.log(best(n));

function best(n) {
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[n];
}

/**
 * bfs를 이용한 풀이: 메모리 초과
 */
console.log(bfs(n));

function bfs(start) {
  let numbers = [start];
  let count = 0;

  while (true) {
    const nextNumbers = [];
    count += 1;

    for (const curr of numbers) {
      if (curr % 3 === 0) nextNumbers.push(curr / 3);
      if (curr % 2 === 0) nextNumbers.push(curr / 2);
      nextNumbers.push(curr - 1);
    }

    if (nextNumbers.includes(1)) break;
    else numbers = nextNumbers;
  }

  return count;
}
