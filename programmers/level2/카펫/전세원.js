function solution(brown, yellow) {
  let answer = [];

  const yellowSqrt = Math.sqrt(yellow);

  for (let yellowWidth = yellow; yellowWidth >= yellowSqrt; yellowWidth -= 1) {
    console.log(yellowWidth);
    if (yellow % yellowWidth !== 0) continue;

    const yellowHeight = yellow / yellowWidth;

    const brownWidth = yellowWidth + 2;
    const brownHeight = yellowHeight + 2;

    if (brownWidth * brownHeight === brown + yellow) {
      answer = [brownWidth, brownHeight];
      break;
    }
  }

  return answer;
}
