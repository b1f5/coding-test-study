const INPUT = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const graph = Array(101).fill(Infinity);
graph[1] = 0;

const map = new Map();

for (let i = 1; i < INPUT.length; i++) {
  const [start, end] = INPUT[i].split(' ').map(Number);
  map.set(start, end);
}

const queue = [];
queue.push({ pos: 1, cnt: 0 });

while (queue.length) {
  const { pos, cnt } = queue.shift();

  if (map.has(pos)) {
    const next = map.get(pos);

    if (graph[next] > cnt) {
      graph[next] = cnt;
      queue.push({ pos: next, cnt });
    }

    continue;
  }

  for (let i = 1; i <= 6; i++) {
    const next = pos + i;

    if (next > 100) continue;

    const count = cnt + 1;

    if (graph[next] > count) {
      graph[next] = count;
      queue.push({ pos: next, cnt: count });
    }
  }
}

console.log(graph[100]);
