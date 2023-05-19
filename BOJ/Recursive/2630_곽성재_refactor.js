const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const paper = input.slice(1).map((str) => str.split(" ").map(Number));

function verify(x, y, n) {
  const el = paper[y][x];
  for (let i = y; i < y + n; i++) {
    for (let j = x; j < x + n; j++) {
      const target = paper[i][j];
      if (el !== target) return false;
    }
  }
  return el ? "blue" : "white"; // 1 : blue, 0 : white
}

let white = 0;
let blue = 0;

// 색종이 배열이 인자로 들어오면, 판별하고 조건을 충족하지 못하면 재귀로 불려지는 함수
function solution(y, x, n) {
  if (verify(y, x, n) === "blue") {
    blue += 1;
  } else if (verify(y, x, n) === "white") {
    white += 1;
  } else {
    solution(y, x, n / 2);
    solution(y, x + n / 2, n / 2);
    solution(y + n / 2, x, n / 2);
    solution(y + n / 2, x + n / 2, n / 2);
  }
}

solution(0, 0, N);

console.log(white + "\n" + blue);
