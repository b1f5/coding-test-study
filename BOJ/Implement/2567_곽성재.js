const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.splice(0, 1);
const arr = input.map((el) => el.split(" ").map(Number));

const BOARD = [];
for (let i = 0; i < 101; i++) {
  BOARD.push(new Array(101).fill(false));
}

let cnt = 0;

arr.forEach(([x, y], idx) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!BOARD[y + j][x + i]) {
        BOARD[y + j][x + i] = true;
      }
    }
  }
});

for (let i = 1; i < 101; i++) {
  let temp = 0;
  for (let j = 1; j < 101; j++) {
    if (BOARD[j][i]) {
      if (BOARD[j - 1][i]) temp++;
      if (BOARD[j + 1][i]) temp++;
      if (BOARD[j][i - 1]) temp++;
      if (BOARD[j][i + 1]) temp++;
    }
    if (temp === 2) cnt += 2;
    if (temp === 3) cnt += 1;
    temp = 0;
  }
}

console.log(cnt);
