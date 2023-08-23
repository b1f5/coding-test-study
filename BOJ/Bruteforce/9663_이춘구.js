let N = require("fs").readFileSync("/dev/stdin").toString().trim();
N = Number(N);

// 놓은 퀸들의 위치를 담은 배열
const queeenPositions = [];

let answer = 0;

// N x N 체스판에 N개의 퀸을 놓으려면 한 행 또는 열에 퀸 하나씩 놓을 수 있어야 함
// 0번째 행부터 한 행씩 내려가며 퀸 하나씩 놓는 DFS 함수
function putQueen(r) {
  // 현재 행이 N이라면 모든 행에 퀸 하나씩 놓았다는 뜻이므로
  // 경우의 수 1증가시키고 종료
  if (r === N) {
    answer += 1;
    return;
  }

  // 현재 행의 열을 하나씩 순회
  for (let c = 0; c < N; c += 1) {
    // 퀸을 놓을 수 있는 안전한 곳이라면
    if (isSafePosition(r, c)) {
      // queenPositions 배열에 [r, c] push
      queeenPositions.push([r, c]);
      // 다음 행 진행
      putQueen(r + 1);
      // DFS 탐색 끝났으므로 하나 제거
      queeenPositions.pop();
    }
  }
}

// [r, c]가 현재까지 놓여진 퀸의 공격 경로에 있는지 확인하는 함수
function isSafePosition(r, c) {
  // 상하: r 또는 c가 같음
  // 대각선: r간의 차와 c간의 차가 같음
  for (const [qR, qC] of queeenPositions) {
    if (qR === r || qC === c || Math.abs(qR - r) === Math.abs(qC - c))
      return false;
  }

  return true;
}

putQueen(0);

console.log(answer);
