const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 101 * 101 그래프 폴스로
// 해당영역들 트루로
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
        cnt++;
      }
    }
  }
});

console.log(cnt);
