const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

/*
1. 벽을 세운다
2. 바이러스를 퍼트린다 -> 벽이 없다면 상하좌우로 퍼질 수 있다
3. 안전지대 갯수를 구한다
*/

const [col, row] = input.shift().split(' ').map(Number);
const board = input.map((i) => i.split(' ').map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let ans = 0; // 안전 지대 세는 변수

const countingSafeZone = (arr) => {
  let cnt = 0;
  let queue = [];

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 2) queue.push([i, j]); // 바이러스이면 queue에 넣어둔다.
    }
  }

  while (queue.length) {
    // 바이러스들 큐를 돌면서 주변 상하좌우로 바이러스 퍼트리기
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]); // 바이러스 된 애들 다시 큐에 추가
      }
    }
  }

  for (let i = 0; i < col; i++) {
    // 안전지대 갯수 세기
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }

  return cnt; // 안전지대 갯수 리턴
};

const dfs = (cnt) => {
  if (cnt === 3) {
    // 벽 3개 다 세웠으면
    let arr = board.map((v) => [...v]); // 연구소 배열 복사
    let cntOfSafe = countingSafeZone(arr); // 안전지대 갯수 셈

    ans = Math.max(ans, cntOfSafe); // 안전지대가 많은지 비교
    return;
  }

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 0) {
        // 빈칸이면
        board[i][j] = 1; // 벽을 세움
        dfs(cnt + 1); // dfs
        board[i][j] = 0; // 벽 세운 것을 지운다
      }
    }
  }
};

dfs(0);
console.log(ans);
