const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [width, height] = input[0].split(" ").map(Number);
// 전체 토마토 갯수
let tomatoCount = 0;
// 익은 토마토 갯수
let ripeCount = 0;
// 익은 토마토들의 위치
let ripeTomatoes = [];
// 익는데 걸리는 일수
let day = 0;
// 토마토밭을 이중배열로 만들면서
const graph = input.slice(1).map((e, i) =>
  e.split(" ").map((v, j) => {
    // 전체 토마토의 갯수를 세고
    if (v !== "-1") tomatoCount += 1;
    if (v === "1") {
      // 익은 토마토의 갯수와 위치를 구한다.
      ripeCount += 1;
      ripeTomatoes.push([i, j]);
    }

    return Number(v);
  })
);

while (ripeTomatoes.length > 0) {
  // 오늘 새로 익은 토마토를 담을 배열
  const newlyRipeTomatoes = [];

  // 이미 익은 토마토를 순회하며
  ripeTomatoes.forEach(([r, c]) => {
    // 주변의 안익은 토마토의 위치를 구한 뒤
    const aroundTomatoes = getUnripesAround([r, c]);
    // 익히면서 익은 토마토 갯수를 증가시킨다.
    aroundTomatoes.forEach(([r, c]) => {
      graph[r][c] = 1;
      ripeCount += 1;
    });
    // 익은 주변 토마토들을 새로 익은 토마토 배열에 추가한다.
    newlyRipeTomatoes.push(...aroundTomatoes);
  });

  // 새로 익은 토마토가 하나라도 있으면 하루 더한다
  if (newlyRipeTomatoes.length !== 0) day += 1;

  // 내일 주변 토마토를 익히는데 사용하기 위해
  // 오늘 새로 익은 토마토를 익은 토마토에 할당한다
  ripeTomatoes = newlyRipeTomatoes;
}

// 모든 토마토가 익었다면 익는데 걸린 일수를 log
console.log(tomatoCount === ripeCount ? day : -1);

// 익은 토마토 주변의 안익은 토마토를 구하는 함수
function getUnripesAround(centerCoord) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const [cR, cC] = centerCoord;
  const result = [];

  directions.filter(([dR, dC]) => {
    const newR = cR + dR;
    const newC = cC + dC;
    const isInRange = newR >= 0 && newR < height && newC >= 0 && newC < width;

    if (isInRange && graph[newR][newC] === 0) result.push([newR, newC]);
  });

  return result;
}
