const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [w, h] = input[0].split(" ").map(Number);
const order = +input[1];

const seats = [];

for (let i = 0; i < h + 1; i++) {
  seats.push(new Array(w + 1).fill(0));
}

let [x, y] = [1, h];
let idx = 1;
// 위 오른 아래 왼 이순서대로 간다
const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];
let curDir = 0;

const result = [];

while (idx <= w * h) {
  if (idx === order) {
    result.push(x);
    result.push(h - y + 1);
  }

  let nextX = x + dirs[curDir][0];
  let nextY = y + dirs[curDir][1];
  // 꺾는 분기들
  if (nextX < 1 || nextY < 1 || nextX > w || nextY > h || seats[nextY][nextX]) {
    curDir = (curDir + 1) % 4;
  }

  seats[y][x] = idx;

  y += dirs[curDir][1];
  x += dirs[curDir][0];
  idx++;
}

// console.table(seats);

if (result.length === 0) {
  console.log("0");
} else {
  console.log(result.join(" "));
}
