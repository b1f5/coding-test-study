/* 미로 탐색 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
// 1: 이동가능, 0: 이동불가
const MAZE = input.map((row) => {
  return row.split('').map(Number);
});

function solution(N, M, MAZE) {
  const isValidIndex = (row, col) => {
    // 행이 범위를 벗어날 때
    if (row < 0 || row >= N) {
      return false;
    }
    // 열이 범위를 벗어날 때
    if (col < 0 || col >= M) {
      return false;
    }

    return true;
  };

  const DIR_OBJ = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };

  let queue = [];
  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );
  // 해당 인덱스에 몇 칸을 거쳐왔는지 체크하는 2차원 배열
  let check = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  queue.push([0, 0]);
  visited[0][0] = true;
  check[0][0] = 1;

  while (queue.length) {
    const [CUR_ROW, CUR_COL] = queue.shift();

    for (const [MOVE_ROW, MOVE_COL] of Object.values(DIR_OBJ)) {
      const NEXT_ROW = CUR_ROW + MOVE_ROW;
      const NEXT_COL = CUR_COL + MOVE_COL;

      // 미로를 벗어나는 인덱스일때
      if (isValidIndex(NEXT_ROW, NEXT_COL) === false) {
        continue;
      }
      // 길이 존재하지 않을때
      if (MAZE[NEXT_ROW][NEXT_COL] === 0) {
        continue;
      }
      // 이미 방문한 길일때
      if (visited[NEXT_ROW][NEXT_COL] === true) {
        continue;
      }

      queue.push([NEXT_ROW, NEXT_COL]);
      visited[NEXT_ROW][NEXT_COL] = true;
      check[NEXT_ROW][NEXT_COL] = check[CUR_ROW][CUR_COL] + 1;
    }
  }

  let result = check[N - 1][M - 1];
  console.log(result);
}

solution(N, M, MAZE);
