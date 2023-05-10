const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...edges] = input;
N = Number(N);

// 트리 만들기
const tree = edges.reduce((tree, edge) => {
  const [from, to] = edge.split(" ").map(Number);

  if (tree[from]) tree[from].push(to);
  else tree[from] = [to];
  if (tree[to]) tree[to].push(from);
  else tree[to] = [from];

  return tree;
}, {});

const needVisit = [1];
const visited = new Array(N).fill(false);
const parents = [];

while (needVisit.length !== 0) {
  const node = needVisit.pop();
  const isVisited = visited[node - 1];

  if (!isVisited) {
    visited[node - 1] = true;
    // DFS이므로 현재 노드에 연결된 노드 중 이미 방문한 노드는 부모 노드
    const parent = tree[node].filter((n) => visited[n - 1]);
    parents[node - 1] = parent[0];
    needVisit.push(...tree[node]);
  }
}

console.log(parents.slice(1).join("\n"));
