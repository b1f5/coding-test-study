// 1. n진법으로 변환한 수 t * m 만큼 나열하기
// 2. 튜브의 순서 p부터 참가 인원 m의 간격으로 튜브 차례의 숫자 나열하기
// 3. 대문자로 치환하기

function solution(n, t, m, p) {
  let list = '';
  for (let i = 0; i <= t * m; i++) {
    list += i.toString(n);
  }

  let res = '';
  for (let j = p - 1; j < t * m; j += m) {
    res += list[j];
  }

  return res.toLocaleUpperCase();
}

console.log(solution(16, 16, 2, 1));
