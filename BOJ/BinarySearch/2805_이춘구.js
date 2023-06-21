const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [, targetTreeLength] = N.split(" ").map(Number);
const treeLengths = M.split(" ").map(Number);

const answer = solution(treeLengths, targetTreeLength);
console.log(answer);

function solution(treeLengths, targetTreeLength) {
  // 톱날 높이의 최소, 최대를 정하고 직전의 중간 높이를 담을 변수 선언
  let minSawHeight = 0;
  let maxSawHeight = Math.max(...treeLengths);
  let prevMidSawHeight;

  while (true) {
    // 중간 높이를 구한다
    const midSawHeight = Math.floor((maxSawHeight + minSawHeight) / 2);
    // 현재 중간 높이가 직전과 동일하다면 더이상 조정할 수 없으므로 최댓값이라는 뜻이다.
    if (midSawHeight === prevMidSawHeight) return midSawHeight;

    // 현재 중간 높이로 모든 나무를 잘라 0 이상의 길이를 합한 총 길이를 구한다
    const totalTreeLength = treeLengths.reduce((curr, treeLength) => {
      const diff = treeLength - midSawHeight;

      return (curr += diff < 0 ? 0 : diff);
    }, 0);

    // 나무토막의 총 길이가 목표로 한 길이와 동일하다면 현재 중간 높이가 최댓값이다
    if (targetTreeLength === totalTreeLength) return midSawHeight;

    // 총 길이가 목표보다 짧다면 톱의 높이가 너무 높은 것이므로 현재 중간 길이를 최대 높이로 지정한다
    // 그 반대의 경우에는 반대로 한다
    if (totalTreeLength < targetTreeLength) maxSawHeight = midSawHeight;
    else minSawHeight = midSawHeight;

    // 현재 중간 높이를 직전 중간 높이로 기록한다
    prevMidSawHeight = midSawHeight;
  }
}
