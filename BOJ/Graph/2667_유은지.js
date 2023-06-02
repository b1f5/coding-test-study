const [INPUT_N, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(INPUT_N);
const apt = INPUT_ARR.map((v) => v.split('').map(Number));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));
const answer = [];

const bfs = (r, c) => {
  const queue = [];
  queue.push([r, c]);
  visited[r][c] = true;

  let count = 1;

  while (queue.length) {
    const [curR, curC] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nR = curR + dx[i];
      const nC = curC + dy[i];

      if (
        nR >= 0 &&
        nC >= 0 &&
        nR < N &&
        nC < N &&
        !visited[nR][nC] &&
        apt[nR][nC] === 1
      ) {
        visited[nR][nC] = true;
        queue.push([nR, nC]);
        count++;
      }
    }
  }
  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && apt[i][j] === 1) answer.push(bfs(i, j));
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
