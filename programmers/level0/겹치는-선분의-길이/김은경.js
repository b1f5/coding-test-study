function solution(lines) {
  let dots = [];
  for (let i of lines) {
    let [a, b] = i;
    dots.push(a, b);
  }
  const max = Math.max(...dots);
  const min = Math.min(...dots);
  // 입력받은 선분의 전체 길이를 key로 갖는 객체 생성 후 0으로 초기화
  let combineLine = {};
  for (let i = min; i <= max; i++) {
    combineLine[i] = 0;
  }
  for (let i of lines) {
    let a = Math.min(...i);
    let b = Math.max(...i);
    let cnt = b - a;
    // 선분의 시작점을 빼주기 위해 j = a + 1 부터 카운트
    for (let j = a + 1; cnt > 0; j++, cnt--) {
      combineLine[j] += 1;
    }
  }
  let answer = 0;
  // 2번 이상 사용된 곳(선분이 겹치는 곳)을 카운트
  for (key in combineLine) {
    if (combineLine[key] > 1) answer += 1;
  }
  return answer;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
