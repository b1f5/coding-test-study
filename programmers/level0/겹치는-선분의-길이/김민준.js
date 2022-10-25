function solution(lines) {
  // {좌표: 좌표를 지나는 선분의 개수}
  let countObj = {};

  for (const LINE of lines) {
    const [X, Y] = LINE;

    const START = Math.min(X, Y);
    const END = Math.max(X, Y);

    for (let i = START; i < END; i += 1) {
      countObj[i] = countObj[i] + 1 || 1;
    }
  }

  const RESULT = Object.values(countObj).filter((el) => el >= 2).length;

  return RESULT;
}
