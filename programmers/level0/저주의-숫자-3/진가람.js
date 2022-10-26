/**
 *
 * @param {number} n 1 ≤ n ≤ 100 정수
 * @returns {number} 3의 배수와 숫자 3을 제외해 센 수
 */
/* 
  키값 형태로 대입하려 한다.
  iterable한 10진법 수에 특정 규칙의 값을 적용해야 한다. 
  이 특성을 봤을 때, 객체를 사용하기 보단 배열의 인덱스를 이용하는 것이 더 유용하다.
*/
function solution(n) {
  const list = [];
  for (let i = 1; list.length < n; i++) {
    if (i % 3 === 0 || String(i).includes('3')) {
      continue;
    }
    list.push(i);
  }
  return list.at(-1);
}

console.log(solution(40));
