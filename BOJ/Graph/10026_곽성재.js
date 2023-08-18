const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// shift로 크기만 뽑아오기
const N = Number(input.shift());
// 남은 문자열들을 배열로 쪼개주기
const grid = input.map((str) => str.split(""));
// let으로 선언한 이유는 나중에 재할당을 하기위해서(색약인 사람꺼 계산할 때)
let visited = Array.from(Array(N), () => Array(N).fill(false));

// 위에서부터 차례대로 '위 아래 왼 오른'의 방향
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const DFS = (r, c) => {
  // 1. 방문처리를 해준다
  visited[r][c] = true;
  // 2. 현재 방문하고있는 곳의 색깔을 선언하고,
  const curColor = grid[r][c];

  for (let i = 0; i < 4; i++) {
    const [dr, dc] = dirs[i];
    const [nextR, nextC] = [r + dr, c + dc];

    // 범위를 벗어나게 되면 방문하지 않음
    if (nextC >= N || nextR >= N || nextC < 0 || nextR < 0) continue;
    // 이미 방문한 곳이라면 방문하지 않음
    if (visited[nextR][nextC]) continue;
    // 2에서 선언한 색과 다음에 방문할 색이 다르다면 방문하지 않음
    if (curColor !== grid[nextR][nextC]) continue;

    // 위에서 필터해준 3개를 거치지 않았다면 방문처리를 한다
    DFS(nextR, nextC);
  }
};

let notColorWeak = 0;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    // 방문하지 않았다면 방문처리와 구역의 카운트를 하나 더한다(최초의 방문에만 1을 더하면, DFS에서 방문처리를 다 해줄예정)
    if (!visited[r][c]) {
      DFS(r, c);
      // 색약이 없는 사람의 구역개수
      notColorWeak += 1;
    }
  }
}

// 색약화
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (grid[r][c] === "G") grid[r][c] = "R";
  }
}

let colorWeak = 0;

visited = Array.from(Array(N), () => Array(N).fill(false));

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (!visited[r][c]) {
      DFS(r, c);
      // 색약이 있는 사람의 구역개수
      colorWeak += 1;
    }
  }
}

console.log(`${notColorWeak} ${colorWeak}`);
