const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, H] = input[0].split(" ").map(Number);
const box = input.slice(1).map((str) => str.split(" ").map(Number));

const visited = [];

for (let i = 0; i < H; i++) {
  const temp = [];
  for (let j = 0; j < N; j++) {
    temp.push(new Array(M).fill(false));
  }
  visited.push(temp);
}

const queue = [];

for (let i = 0; i < box.length; i++) {
  const floor = Math.floor(i / N);
  const vertical = i % N;
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      visited[floor][vertical][j] = true;
      queue.push([floor, vertical, j]);
    } else if (box[i][j] === -1) {
      visited[floor][vertical][j] = true;
    }
  }
}

const dirs = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, 0, -1],
  [0, 0, 1],
  [0, 1, 0],
  [0, -1, 0],
];

let doingIdx = 0;
let oneLoopIdx = queue.length - 1;
let answer = -1;

while (true) {
  if (!queue[doingIdx]) break;

  const [h, n, m] = queue[doingIdx];

  for (let i = 0; i < dirs.length; i++) {
    const [dh, dn, dm] = dirs[i];
    // 0 <= h + dh < H
    if (h + dh < 0 || h + dh >= H || n + dn < 0 || n + dn >= N || m + dm < 0 || m + dm >= M) {
      continue;
    }
    if (visited[h + dh][n + dn][m + dm] === false) {
      visited[h + dh][n + dn][m + dm] = true;
      queue.push([h + dh, n + dn, m + dm]);
    }
  }

  if (doingIdx === oneLoopIdx) {
    answer += 1;
    oneLoopIdx = queue.length - 1;
  }

  doingIdx++;
}

// console.log(box);
// console.log(visited);
console.log(visited.some((arr) => arr.flat().includes(false)) ? -1 : answer);

// board.length === H
// board[0].length === N
// board[0][0].length === M
// board[h][n][m] === 1 || 0 || -1
// if(1) [h, n, m] push? x개 => 0번부터 x-1번까지가 첫번째 루프
// 위                  아래                왼                  오른                앞                  뒤
// visited[h-1][n][m] visited[h+1][n][m] visited[h][n][m-1] visited[h][n][m+1] visited[h][n+1][m] visited[h][n-1][m]
// visited => 1 || -1 true?

// 3중배열
/**
m : 5, n : 3, h : 2
    
    1 2 3 4 5 => M
  1  0 0 0 0 0
  2  0 0 0 0 0
  3  0 0 0 0 0
  ============>h
  1  0 0 0 0 0
  2  0 0 1 0 0
  3  0 0 0 0 0
=>N
 */

// [
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ],
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//   ],
// ];
