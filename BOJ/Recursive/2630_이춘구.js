const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, ...rest] = input;
const sideLength = Number(N);
const square = rest.map((r) => r.split(" "));

let white = 0;
let blue = 0;

function solution(r, c, sideLength) {
  // 사각형 내부의 색이 전부 동일하다면
  // 해당 색의 개수를 1 증가시키고 종료
  if (isAllSameColor(r, c, sideLength)) {
    const color = square[r][c];

    if (color === "0") white += 1;
    else blue += 1;

    return;
  }

  // 사각형 내부의 색이 전부 동일하지 않다면 사각형을 4등분하고
  sideLength /= 2;

  // 각 사각형 좌상단의 좌표와 반으로 나눈 한 변의 길이로 재귀 실행
  solution(r, c, sideLength);
  solution(r + sideLength, c, sideLength);
  solution(r, c + sideLength, sideLength);
  solution(r + sideLength, c + sideLength, sideLength);
}

// 사각형의 좌상단 좌표와 사각형 한 변의 길이로
// 해당 사각형 내부의 색이 전부 동일한지 확인
function isAllSameColor(r, c, sideLength) {
  // 기준색으로 좌상단의 색 할당
  const criteriaColor = square[r][c];

  for (let i = r; i < r + sideLength; i += 1) {
    for (let j = c; j < c + sideLength; j += 1) {
      // 기준색과 동일하지 않다면 바로 false 반환
      if (square[i][j] !== criteriaColor) return false;
    }
  }

  return true;
}

solution(0, 0, sideLength);

console.log(`${white}\n${blue}`);
