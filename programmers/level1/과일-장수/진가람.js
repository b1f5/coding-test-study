function solution(k, m, score) {
  let sorted = score.sort((a, b) => b - a);

  let res = 0;
  for (let i = 0; i <= sorted.length - m; i += m) {
    let min = Math.min(...sorted.slice(i, i + m));
    res += min * m;
  }
  return res;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1, 3]));
