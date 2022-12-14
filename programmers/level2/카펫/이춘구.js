// @ts-check
/**
 * @param {number} brown 갈색 격자의 수
 * @param {number} yellow 노란색 격자의 수
 * @returns {number[]} 카펫의 가로, 세로 크기를 순서대로 담은 배열
 */
function solution(brown, yellow) {
  let answer = [];

  // 노란 격자의 수로 만들 수 있는 가로 * 세로의 경우들을 하나씩 구한다.
  for (let yellowWidth = yellow; yellowWidth > 0; yellowWidth -= 1) {
    // 직사각형이 될 수 없는 경우면 다음으로 넘어간다.
    if (yellow % yellowWidth !== 0) continue;

    const yellowHeight = yellow / yellowWidth;

    // 노란 격자로 만들어진 직사각형의 가로, 세로에
    // 각각 2를 더한 길이가 갈색 격자로 만들어진 테두리의 길이이다.
    const brownWidth = yellowWidth + 2;
    const brownHeight = yellowHeight + 2;

    // 갈색 격자로 만들어진 직사각형의 넓이 = 노란 격자의 수 + 갈색 격자의 수를
    // 만족하는 경우가 정답이다.
    if (brownWidth * brownHeight === brown + yellow) {
      answer = [brownWidth, brownHeight];
      break;
    }
  }

  return answer;
}
