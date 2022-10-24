/**
 * @param {number[][]} lines 세 선분의 x좌표 시작과 끝이 들어있는 2차원 배열
 * @returns {number} 선분이 겹치는 부분의 길이
 */
function solution(lines) {
  // x좌표가 key이고 value는 0으로 초기화된 요소들이 모인 객체를 만든다.
  const wholeSegments = getWholeSegments(lines);

  // x좌표 시작과 끝이 들어있는 2차원 배열을 순회하면서
  for (const line of lines) {
    // 작은 x좌표와 큰 x좌표로 구조분해한다.
    let [smallerDot, biggerDot] = line;
    // smallerDot이 biggerDot보다 크다면 둘을 바꿔서 재할당한다.
    smallerDot > biggerDot &&
      ([smallerDot, biggerDot] = [biggerDot, smallerDot]);
    // 작은 x좌표부터 큰 x좌표까지 순회하면서
    for (let i = smallerDot; i < biggerDot; i++) {
      // 해당 x좌표의 value에 1을 더한다.
      wholeSegments[i] += 1;
    }
  }

  let answer = 0;
  // 객체의 값을 순회하면서 1보다 크다면(겹친 부분이라면) answer에 1을 더한다
  Object.values(wholeSegments).forEach((segment) => segment > 1 && answer++);

  return answer;
}

/**
 * @param {number[][]} lines 세 선분의 x좌표 시작과 끝이 들어있는 2차원 배열
 * @returns {Object<string,number>}
 * x좌표가 key이고 x좌표에서 시작한 길이가
 * 1인 선분의 겹침 횟수를 value로 갖는 객체
 */
function getWholeSegments(lines) {
  // 이차원 배열을 일차원 배열로 만들고 x좌표들을 오름차순 정렬한다.
  const sortedFlatDots = lines.flat().sort((a, b) => a - b);
  // 제일 큰 x좌표와 제일 작은 x좌표을 골라낸다.
  const biggestDot = sortedFlatDots.at(-1);
  const smallestDot = sortedFlatDots[0];
  // 좌표 사이의 길이를 구한다.
  const wholeSegmentsLength = biggestDot - smallestDot;

  // 제일 작은 x좌표부터 제일 큰 x좌표까지 순차적으로 증가하는 key와
  // 0을 value로 갖는 요소가 담긴 객체를 만든다.
  const wholeSegments = Array.from(
    { length: wholeSegmentsLength },
    (_, i) => smallestDot + i
  ).reduce((obj, curr) => {
    obj[curr] = 0;
    return obj;
  }, {});

  return wholeSegments;
}

const lines = [
  [1, -1],
  [1, 3],
  [9, 3],
];
console.log(solution(lines));
