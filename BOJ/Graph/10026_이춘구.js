const [N, ...RGBs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sideLength = Number(N);
const picture = RGBs.map((r) => r.split(""));
// 상하좌우 좌표
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 색맹일 경우 R과 G값을 같은 값으로 변경하기 위한 테이블
const perception = {
  R: "RG",
  G: "RG",
  B: "B",
};
const answers = [];

// 색맹이 아닐 경우
answers.push(countColorSection(picture, false));
// 색맹일 경우
answers.push(countColorSection(picture, true));

console.log(answers.join(" "));

function countColorSection(picture, isColorBlind) {
  // 검사여부를 확인할 이차원 배열
  const visited = Array.from({ length: sideLength }, () =>
    new Array(sideLength).fill(false)
  );
  // 구역 갯수 0으로 초기화
  let sectionCount = 0;

  // 그림의 모든 RGB값들을 순회
  for (let r = 0; r < sideLength; r += 1) {
    for (let c = 0; c < sideLength; c += 1) {
      // 이미 검사한 좌표라면 continue
      if (visited[r][c]) continue;

      // 아직 검사하지 않은 좌표라면 검사할 좌표의 초깃값으로 추가
      const willVisit = [[r, c]];

      // 더이상 검사할 좌표가 없을 때까지 반복
      while (willVisit.length !== 0) {
        const [currR, currC] = willVisit.pop();
        // 검사 완료 처리
        visited[currR][currC] = true;
        // 색맹이라면 R과 G값을 같은 값으로 변경
        const currRgbValue = isColorBlind
          ? perception[picture[currR][currC]]
          : picture[currR][currC];

        // 상하좌우의 값들을 순회
        for (const [dR, dC] of directions) {
          const nextR = currR + dR;
          const nextC = currC + dC;

          // 그림의 범위를 넘어가면 다음 좌표값으로 continue
          const isRWithinRange = 0 <= nextR && nextR < sideLength;
          const isCWithinRange = 0 <= nextC && nextC < sideLength;
          if (!isRWithinRange || !isCWithinRange) continue;

          // 아직 방문하지 않았고 현재의 RGB값과 동일한 값이라면
          // 다음에 방문하기 위해 willVisit 배열에 추가
          const isVisited = visited[nextR][nextC];
          // 색맹이라면 R과 G값을 같은 값으로 변경
          const nextRgbValue = isColorBlind
            ? perception[picture[nextR][nextC]]
            : picture[nextR][nextC];
          const isSameRgbValue = currRgbValue === nextRgbValue;
          if (isSameRgbValue && !isVisited) willVisit.push([nextR, nextC]);
        }
      }

      // while문에서 탈출했다면 인접한 동일 RGB값들을 전부 검사했다는 뜻이므로 구역 갯수 +1
      sectionCount += 1;
    }
  }

  return sectionCount;
}
