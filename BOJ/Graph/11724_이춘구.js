const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
let answer = 0;

input.slice(1).forEach((curr) => {
  const [u, v] = curr.split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
});

for (let i = 1; i <= N; i += 1) {
  if (!visited[i]) {
    dfs(i);
    answer += 1;
  }
}

console.log(answer);

/**
 * 재귀 방식
 */
function dfs(start) {
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i += 1) {
    const next = graph[start][i];

    if (!visited[next]) dfs(next);
  }
}

/**
 * while 방식
 */
function dfs(start) {
  let needVisit = [start];

  while (needVisit.length) {
    const curr = needVisit.pop();

    if (!visited[curr]) {
      visited[curr] = true;
      needVisit.push(...graph[curr]);
    }
  }
}
