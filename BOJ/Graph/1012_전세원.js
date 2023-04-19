let fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const questionNumber = input[0];
const eachTestCase = [];
const divideQuestion = input.slice(1).map((el) => el.split(" "));

divideQuestion.forEach((el) => {
  if (el.length === 3) {
    eachTestCase.push([el]);
  } else {
    eachTestCase.at(-1).push(el);
  }
});

const finalAnswer = [];

eachTestCase.forEach((array) => {
  const answer = solution(array);
  finalAnswer.push(answer);
});
//정답 파트
console.log(finalAnswer.join("\n"));

function solution(array) {
  let count = 0;
  const [M, N, K] = array[0].map((el) => Number(el)); // M 넓이 N 높이 K 배추갯수
  const cabbageCoordinate = array
    .slice(1)
    .map((arr) => arr.map((el) => Number(el)));
  const farmHeight = new Array(N).fill(0);
  let farm = Array.from(farmHeight, (arr) => new Array(M).fill(0)); // 제발.. 기본 좀 생각하고 살자.

  //일단 배추 위치 처리하기
  cabbageCoordinate.forEach((arr) => {
    const [m, n] = arr;
    farm[n][m] = 1;
  });

  farm = farm.map((aLine, index) => {
    for (let i = 0; i < aLine.length; i++) {
      if (aLine[i] !== 1) continue;

      if (aLine[i] === 1) {
        const height = index;
        const width = i;

        visitedCabbage(height, width);
        count += 1;
      }
    }
  });

  function visitedCabbage(height, width) {
    farm[height][width] = 0;
    const left = verifyIndex(height, width - 1);
    const right = verifyIndex(height, width + 1);
    const top = verifyIndex(height - 1, width);
    const bottom = verifyIndex(height + 1, width);

    if (left && farm[height][width - 1] === 1) {
      visitedCabbage(height, width - 1);
    }
    if (right && farm[height][width + 1] === 1) {
      visitedCabbage(height, width + 1);
    }
    if (top && farm[height - 1][width] === 1) {
      visitedCabbage(height - 1, width);
    }
    if (bottom && farm[height + 1][width] === 1) {
      visitedCabbage(height + 1, width);
    }
  }

  // 접근할 수 있는 인덱스인지 알려주는 함수
  function verifyIndex(height, width) {
    if (height < 0 || width < 0 || height >= N || width >= M) {
      return false;
    }

    return true;
  }

  return count;
}
