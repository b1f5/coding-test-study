const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 정점의 갯수, 간선의 갯수
const [N, M] = input.shift().split(" ").map(Number);
const nodes = input.map((_) => _.split(" ").map(Number));

// 최초방문에만 카운트해주고 싶어서 DFS에 인자를 두개 넘김 (L, cnt)
// cnt가 0일때만 answer에다가 더해줌
// 그럴필요없이 최초 순회하면 돌릴때 방문안했으면 DFS돌리면서 그때 더해줌
// 인접행렬을 이용해서 풀었고, 그렇지 않은거랑 별 차이 없음
const board = [];
const visited = new Array(N + 1).fill(false);

for (let i = 0; i <= N; i++) {
  board.push(new Array(N + 1).fill(0));
}

nodes.forEach(([start, end]) => {
  board[start][end] = 1;
  board[end][start] = 1;
});

// console.table(board);

let answer = 0;

const DFS = (L) => {
  visited[L] = true;
  for (let i = 1; i <= N; i++) {
    if (board[L][i] === 1 && visited[i] === false) {
      DFS(i);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (visited[i] === false) {
    DFS(i);
    answer += 1;
  }
}

console.log(answer);

/*
const board = [];
const visited = new Array(N + 1).fill(false);

for (let i = 0; i <= N; i++) {
  board.push([]);
}

nodes.forEach(([start, end]) => {
  board[start].push(end);
  board[end].push(start);
});

let answer = 0;
const DFS = (L) => {
  visited[L] = true;
  for (let i = 0; i < board[L].length; i++) {
    if (visited[board[L][i]] === false) {
      DFS(board[L][i]);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (visited[i] === false) {
    DFS(i);
    answer += 1;
  }
}
console.log(answer);
*/

/* 춘구님 while 방식
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
*/
