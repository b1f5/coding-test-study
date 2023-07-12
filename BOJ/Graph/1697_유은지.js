const [N, K] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = new Array(100001).fill(false);

const bfs = (start) => {
  const queue = [];
  queue.push([start, 0]);
  visited[start] = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const [cur, time] = queue.shift();

      if (cur === K) return time;

      // 각 경우마다 돌면서 확인 - 방문했는지, 범위 내인지
      for (const next of [cur - 1, cur + 1, cur * 2]) {
        if (next >= 0 && next <= 100000 && !visited[next]) {
          visited[next] = true;
          queue.push([next, time + 1]);
        }
      }
    }
  }
};

console.log(bfs(+N));
