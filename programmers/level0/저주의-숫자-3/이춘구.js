/**
 * @param {number} n 3x마을에서 사용하는 숫자로 바꿀 정수
 * @returns {number} 3x 마을에서 사용하는 숫자로 바뀐 정수
 */
function solution(n) {
  // 3x마을에서 사용하는 숫자들만 넣어둘 배열을 만든다.
  const villageNums = [];
  // 1부터 시작해서 3x마을에서 사용할 수 있는 숫자인지 검사한다.
  let num = 1;

  while (villageNums.length < n) {
    // num이 3의 배수가 아니고 num에 3이 들어있지 않다면 배열에 추가한다.
    if (num % 3 !== 0 && !/3/.test(num)) villageNums.push(num);
    // 다음 숫자를 검사하기 위해 1을 더한다.
    num += 1;
  }

  // n-1번째 숫자를 반환한다.
  return villageNums[n - 1];
}
