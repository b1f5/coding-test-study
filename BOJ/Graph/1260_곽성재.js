const fs = require("fs");
const { join } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, start] = input[0].split(" ").map(Number);
let [_, ...nodes] = input;

nodes = nodes.map((el) => el.split(" ").map(Number));
// console.log(nodes);

// 그래프생성
graph = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  graph[i] = new Array(N + 1).fill(0, 0, N + 1);
}

nodes.forEach(([left, right]) => {
  graph[left][right] = 1;
  graph[right][left] = 1;
});
// console.log(graph);

// DFS
const visit_DFS = [];
const visited_DFS = new Array(N + 1).fill(false);

const DFS = (L) => {
  // console.log("DFS_VISIT =>", L);
  // 방문했다면 리턴
  if (visited_DFS[L]) return;

  // 그렇지않다면 (방문안했다면)
  visited_DFS[L] = true;
  visit_DFS.push(L);
  for (let i = 1; i < graph[L].length; i++) {
    if (graph[L][i] === 1 && visited_DFS[i] !== true) {
      DFS(i);
    }
  }
};

DFS(start);

// BFS
const visit_BFS = [];
const visited_BFS = new Array(N + 1).fill(false);

const BFS = (L) => {
  let Queue = [L];
  visit_BFS.push(L);
  // 한 루프를 돈다 === 지금쌓인 큐를 처리한다
  // 처음에는 스타트노드일거고, 그 다음은 스타트노드와 연결된 노드일거고
  // 그 다음은 또 그것들과 연결된 노드...
  while (Queue.length !== 0) {
    let dequeue = Queue.shift();
    console.log("SHIFT =>", dequeue);
    visited_BFS[dequeue] = true;
    // graph[dequeue] === 지금 꺼낸애가 연결된 애들이 누가있는지 알수있는 배열
    // [0, 0, 1, 0, 0] 3번과 연결되었다는 의미
    for (let i = 1; i < graph[dequeue].length; i++) {
      if (graph[dequeue][i] === 1 && visited_BFS[i] !== true) {
        visited_BFS[i] = true;
        console.log("PUSH =>", i);
        Queue.push(i);
        visit_BFS.push(i);
      }
    }
  }
};

BFS(start);

let answer = "";
answer += visit_DFS.join(" ") + "\n" + visit_BFS.join(" ");
console.log(answer);
