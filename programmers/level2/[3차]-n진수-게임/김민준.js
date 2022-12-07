/**
 * @param {number} n 진법
 * @param {number} t 미리 구할 숫자의 개수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 */
function solution(n, t, m, p) {
  let answer = '';
  let result = '';
  let num = 0;

  while (true) {
    result += num.toString(n);
    num += 1;

    if (result.length >= m * t) break;
  }

  for (let i = p - 1; i < m * t; i += m) {
    answer += result[i];
  }

  answer = result.toUpperCase();
  return answer;
}
