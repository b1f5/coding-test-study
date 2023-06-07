const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const board = input.slice(1).map((v) => v.split("").map(Number));

function solution() {
  // cnt: 세대수
  let cnt = 0;
  let answer = [];
  // const visited = [];
  // for (let i = 0; i < N; i++) {
  //   visited.push(Array(N).fill(false));
  // }

  // up down left right
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const validate = (r, c) => {
    if (0 <= c && c < N && 0 <= r && r < N && board[r][c]) return true;
    return false;
  };

  const DFS = (r, c) => {
    // 무한히 순회하는것 방지
    // if (visited[r][c]) return;

    // 방문처리 및 세대수추가
    // visited[r][c] = true;
    board[r][c] = 0;
    cnt++;

    // 주위 4방향 검사 후, 재귀 호출
    for (let i = 0; i < 4; i++) {
      const [nextR, nextC] = [r + dr[i], c + dc[i]];
      if (validate(nextR, nextC)) DFS(nextR, nextC);
    }
  };

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c]) {
        DFS(r, c);
        answer.push(cnt);
        cnt = 0;
      }
    }
  }

  // 오름차순 정렬 및 단지수 삽입
  answer.sort((a, b) => a - b);
  answer.unshift(answer.length);

  return answer;
}

console.log(solution().join("\n"));
