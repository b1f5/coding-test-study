const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
const [N, M] = input.split(' ').map(Number);

const result = [];
const cache = [];
const visited = new Array(N + 1).fill(false);

const recursive = (value) => {
  if (cache.length === M) {
    result.push(cache.join(' '));
    return;
  }

  for (let i = value + 1; i <= N; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      cache.push(i);
      recursive(i);
      cache.pop();
      visited[i] = false;
    }
  }
};

recursive(0);

console.log(result.join('\n'));