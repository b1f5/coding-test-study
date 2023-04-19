/* DFS와 BFS */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const VERTEX_LIST = input.map((vertex) => {
  return vertex.split(' ').map(Number);
});

function solution(N, M, V, VERTEX_LIST) {
  let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));

  VERTEX_LIST.forEach((vertex) => {
    let [start, end] = vertex;
    graph[start][end] = true;
    graph[end][start] = true;
  });

  let resultDFS = [];
  let visited = Array.from({ length: N + 1 }, () => false);
  const DFS = (V) => {
    if (visited[V]) return;

    visited[V] = true;
    resultDFS.push(V);

    graph[V].forEach((_, nextNode) => {
      if (graph[V][nextNode] && !visited[nextNode] && nextNode !== 0) {
        DFS(nextNode);
      }
    });
  };
  DFS(V);

  let resultBFS = [];
  visited.fill(false);
  const BFS = (V) => {
    let queue = [];

    queue.push(V);

    while (queue.length) {
      let node = queue.shift();

      if (visited[node]) {
        continue;
      }
      visited[node] = true;
      resultBFS.push(node);

      graph[node].forEach((_, nextNode) => {
        if (graph[node][nextNode] && !visited[nextNode] && nextNode !== 0) {
          queue.push(nextNode);
        }
      });
    }
  };
  BFS(V);

  console.log(resultDFS.join(' '));
  console.log(resultBFS.join(' '));
}

solution(N, M, V, VERTEX_LIST);
