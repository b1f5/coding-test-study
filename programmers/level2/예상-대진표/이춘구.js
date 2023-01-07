// @ts-check
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function solution(n, a, b) {
  // 1라운드부터 시작
  let answer = 1;

  while (true) {
    const diff = Math.abs(a - b);
    const bigger = a < b ? b : a;

    // 둘의 차이가 1이고 큰 수가 짝수라면 종료
    if (diff === 1 && bigger % 2 === 0) break;

    // 아니라면 짝수는 / 2, 홀수는 + 1 / 2하고 라운드 진행
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
    answer += 1;
  }

  return answer;
}

console.log(solution(8, 4, 7)); // 3
