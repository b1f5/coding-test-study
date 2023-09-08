const [_, ...rest] = `4 9
8 52
6 80
26 42
2 72
51 19
39 11
37 29
81 3
59 5
79 23
53 7
43 33
77 21`
  .toString()
  .trim()
  .split("\n");
// const [_, ...rest] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// 사다리나 뱀 칸을 밟으면 이동하는 위치를 테이블로 정리
const laddersAndSnakes = rest.reduce((obj, v) => {
  const [start, end] = v.split(" ").map(Number);
  obj[start] = end;
  return obj;
}, {});
// 주사위 눈금
const numbersOnDice = [1, 2, 3, 4, 5, 6];
// 방문 예정 배열과 방문한 위치의 배열
const willVisit = [[1, 0]];
const visited = new Array(100).fill(false);

while (true) {
  const [currLocation, thrownCount] = willVisit.shift();
  // 현재 위치가 100이면 thrown(던진 횟수) 출력
  if (currLocation === 100) return console.log(thrownCount);

  // 현재 위치에 주사위 눈금 하나씩 더하기
  for (const number of numbersOnDice) {
    let nextLocation = currLocation + number;
    // 눈금 더한 위치가 사다리나 뱀 칸이라면 위치 갱신
    nextLocation = laddersAndSnakes[nextLocation] || nextLocation;
    // 다음 위치가 100 이상이거나 이미 방문한 곳이라면 다음 눈금
    if (nextLocation > 100 || visited[nextLocation]) continue;

    // 다음 눈금 방문 표시
    visited[nextLocation] = true;
    // 던진 위치 1 늘려서 방문 예정 배열에 삽입
    willVisit.push([nextLocation, thrownCount + 1]);
  }
}
