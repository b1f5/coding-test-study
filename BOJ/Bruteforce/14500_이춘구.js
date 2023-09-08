const [NM, ...rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
const paper = rest.map((r) => r.split(" ").map(Number));
// 방문 기록할 이차원 배열
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
let answer = 0;
// 백트래킹 + DFS
// 전체 순회
for (let r = 0; r < N; r += 1) {
  for (let c = 0; c < M; c += 1) {
    // 해당 칸을 방문 기록한 뒤
    visited[r][c] = true;
    // 해당 칸을 시작으로 가능한 테트로미노를 전부 만들고
    makeTetromino(r, c, 1, paper[r][c]);
    // 방문 기록을 삭제한다
    visited[r][c] = false;
  }
}

console.log(answer);

function makeTetromino(r, c, currLength, currSum) {
  // 테트로미노의 현재 길이가 4라면
  if (currLength === 4) {
    // 완성이므로 합의 현재 최댓값과 현재의 합을 비교해서 둘 중 큰 것으로 바꾼다.
    answer = Math.max(answer, currSum);
    return;
  }

  // 현재 칸의 상하좌우를 구한다.
  const arounds = getAround(r, c);
  // 4방향을 돌면서
  for (const [nextR, nextC] of arounds) {
    const nextLength = currLength + 1;
    const nextSum = currSum + paper[nextR][nextC];

    // ㅗㅓㅏㅜ 모양을 위해 현재 길이가 2일때만 동일 위치에서 한 번 더 실행
    if (currLength === 2) {
      visited[nextR][nextC] = true;
      makeTetromino(r, c, nextLength, nextSum);
      visited[nextR][nextC] = false;
    }

    visited[nextR][nextC] = true;
    makeTetromino(nextR, nextC, nextLength, nextSum);
    visited[nextR][nextC] = false;
  }
}

function getAround(r, c) {
  const DIR = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const around = [];

  for (const [dR, dC] of DIR) {
    const nextR = r + dR;
    const nextC = c + dC;

    if (0 <= nextR && nextR < N && 0 <= nextC && nextC < M) {
      if (!visited[nextR][nextC]) {
        around.push([nextR, nextC]);
      }
    }
  }

  return around;
}
