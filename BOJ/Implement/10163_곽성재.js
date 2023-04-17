const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1001 * 1001 보드에다가 순차적으로 해당 인덱스로 변환한다

const N = input.splice(0, 1);
const papers = input.map((el) => el.split(" ").map(Number));

const board = [];
// const board = new Array(1001);
for (let i = 0; i < 1001; i++) {
  const temp = new Array(1001);
  board.push(temp);
}

papers.forEach(([x, y, w, h], idx) => {
  for (let i = y; i < y + h; i++) {
    for (let j = x; j < x + w; j++) {
      board[i][j] = idx + 1;
    }
  }
});
// console.table(board);
// console.log(board);

const result = [];

for (let n = 1; n <= N; n++) {
  let cnt = 0;
  for (let i = 0; i < 1001; i++) {
    for (let j = 0; j < 1001; j++) {
      if (board[i][j] === n) cnt++;
    }
  }
  result.push(cnt);
}

console.log(result.join("\n"));
