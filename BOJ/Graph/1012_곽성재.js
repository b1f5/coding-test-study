const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input[0];
let i = 1;
const result = [];
for (let cnt = 1; cnt <= T; cnt++) {
  // 가로 세로 배추갯수
  const [M, N, K] = input[i].split(" ").map(Number);
  // prettier-ignore
  const [...rest] = input.slice(i + 1, i + K + 1).map(el => el.split(' ').map(Number));

  // 배추가있는곳 => 1
  const arr = [];
  // 방문한곳 => 1
  const visited = [];

  for (let j = 0; j < N; j++) {
    const temp1 = new Array(M).fill(0);
    arr.push(temp1);
    visited.push(temp1.slice());
  }

  rest.forEach(([x, y]) => {
    arr[y][x] = 1;
  });

  // 벌레갯수
  let answer = 0;

  const DFS = (x, y, L) => {
    // 범위넘어가는애들 리턴
    // 이미 방문했다면
    if (x < 0 || y < 0 || x >= M || y >= N || visited[y][x] === 1) {
      return;
    } else if (arr[y][x] === 1) {
      // 위에서 안걸렸다면 == 배추가심어져있고 방문하지 않은곳이다
      // 최초 방문시에만 벌레를 더함
      if (L === 0) answer++;
      // 방문처리
      visited[y][x] = 1;

      DFS(x + 1, y, L + 1);
      DFS(x - 1, y, L + 1);
      DFS(x, y + 1, L + 1);
      DFS(x, y - 1, L + 1);
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[j][i] === 1) {
        DFS(i, j, 0);
      }
    }
  }
  result.push(answer);
  i += K + 1;
}

console.log(result.join("\n"));
