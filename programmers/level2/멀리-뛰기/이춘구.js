// @ts-check
/**
 * 피보나치 수와 bigint를 이용한 풀이
 * @param {number} n
 * @returns {bigint | number}
 */
function solutionPib(n) {
  if (n === 1) return n;

  let pib = [1n, 2n];

  for (let i = 2; i < n; i += 1) {
    pib = [pib[1], pib[0] + pib[1]];
  }

  return pib[1] % 1234567n;
}

/**
 * 수열을 이용한 풀이
 * @param {number} n
 * @returns {bigint}
 */
function solution(n) {
  if (n === 1) return 1n;

  let count = Math.floor(n / 2);

  const arr = [
    new Array(n).fill(1n),
    Array.from({ length: n - 1 }, (_, i) => BigInt(i + 1)),
  ];

  for (let i = 1; i < count; i += 1) {
    const temp = [];
    for (let j = -1; j < arr[i].length - 3; j += 1) {
      temp.push(BigInt(arr[i][j + 1] + (temp[j] || 0n)));
    }
    arr.push(temp);
  }

  const answer = arr.reduce(
    (acc, cur) => BigInt(acc + cur[cur.length - 1]),
    0n
  );

  return answer % 1234567n;
}
