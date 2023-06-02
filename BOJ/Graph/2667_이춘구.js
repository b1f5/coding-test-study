const [N, ...rest] = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
  .toString()
  .trim()
  .split("\n");

// const [N, ...rest] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// 지도 한 변의 길이
const sideLength = Number(N);
// 지도
const map = rest.map((v) => v.split("").map(Number));

// 단지당 집 개수
let housePerComplex = 0;
// 단지당 집 개수 담을 배열
const answer = [];

solution();
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));

function solution() {
  // 지도 전체를 순회
  for (let r = 0; r < sideLength; r += 1) {
    for (let c = 0; c < sideLength; c += 1) {
      // 1이면(집이 있으면)
      if (map[r][c] === 1) {
        // DFS
        findHouse([r, c]);
        // 단지당 집 개수 배열에 넣고 초기화
        answer.push(housePerComplex);
        housePerComplex = 0;
      }
    }
  }
}

function findHouse([r, c]) {
  if (map[r][c] === 1) {
    // 방문처리
    map[r][c] = 0;
    // 단지당 집 개수 하나 늘리고
    housePerComplex += 1;
    // 주변 좌표 구해서 
    const aroundCoords = getAroundCoords([r, c]);
    aroundCoords.forEach((coord) => findHouse(coord));
  }
}

// 지도의 범위를 벗어나지 않는 주변 좌표 구하기
function getAroundCoords([r, c]) {
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  return DIRECTIONS.map(([dR, dC]) => [r + dR, c + dC]).filter(
    ([r, c]) => r >= 0 && r < sideLength && c >= 0 && c < sideLength
  );
}
