const [input_n, input_S, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(qElement) {
    let isContain = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i][1] > qElement[1]) {
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      this.queue.push(qElement);
    }
  }
  dequeue() {
    if (!this.isEmpty()) return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

// 서로 다른 두 정점 사에 간선이 한 개 아닌 두 개 일 수 있음
const [V, E] = input_n.split(' ').map(Number);
const start = Number(input_S);
const rel = ARR.map((v) => v.split(' ').map(Number));

const pq = new PriorityQueue();
const arr = Array.from(Array(V + 1), () => []);
const visited = Array.from(Array(V + 1), () => false);
const answer = Array.from(Array(V + 1), () => Infinity);

rel.forEach(([from, to, weight]) => {
  arr[from].push([to, weight]);
});

answer[start] = 0;
pq.enqueue([start, 0]);

while (!pq.isEmpty()) {
  const [curN, weight] = pq.dequeue();

  if (visited[curN]) continue;

  visited[curN] = true;

  for (const [nextN, weight] of arr[curN]) {
    if (answer[nextN] > answer[curN] + weight) {
      answer[nextN] = answer[curN] + weight;
      pq.enqueue([nextN, answer[nextN]]);
    }
  }
}

console.log(
  answer
    .map((v) => (v === Infinity ? 'INF' : v))
    .slice(1)
    .join('\n')
);
