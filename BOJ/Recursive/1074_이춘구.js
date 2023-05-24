const [N, r, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;

function divide(N, r, c) {
  if (N === 0) return;

  // 한 변의 길이 totalCell = Math.pow(2, N) ** 16
  const sideLength = Math.pow(2, N);
  // 한 변의 길이의 반
  const half = sideLength / 2;
  // 4분의 1의 칸 개수
  const quarterCell = half * half;

  // r < half, c < half => 1사분면
  if (r < half && c < half) {
    divide(N - 1, r, c);
  }

  // r > half, c > half => 2사분면
  else if (r < half && c >= half) {
    answer += quarterCell * 1;
    divide(N - 1, r, c - half);
  }

  // r > half, c < half => 3사분면
  else if (r >= half && c < half) {
    answer += quarterCell * 2;
    divide(N - 1, r - half, c);
  }

  // r > half, c > half => 4사분면
  else if (r >= half && c >= half) {
    answer += quarterCell * 3;
    divide(N - 1, r - half, c - half);
  }
}

divide(N, r, c);
console.log(answer);
