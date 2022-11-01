/**
 *
 * @param {number} number 임의의 숫자
 * @returns {number} 임의의 숫자에 도달할 때까지 친 박수의 수
 */
function problem3(number) {
  const splited = number.toString().split('').map(Number);
  let count = 0;

  // 일의 자리에서 박수의 수
  const unitsDigit = splited.pop();
  count += Math.floor(unitsDigit / 3);

  // 박수에는 규칙이 있다. 이것을 몇번 반복할 것인가?
  const restNum = Number(splited.join(''));
  count += rotation(restNum);

  // 맨 앞자리가 369일때
  const [head, ...tail] = splited;
  if (is369(head)) {
    count += Number([...tail, unitsDigit].join('')) + 1;
  }
  return count;
}

function is369(num) {
  return num === 3 || num === 6 || num === 9;
}

function rotation(num) {
  let result = 0;

  // 0-9까지 패턴을 미리 만들고 더하기
  const claps = Array.from({ length: 10 }, (_, i) =>
    i === 0 ? 3 : i % 3 ? 3 : 13
  );
  for (let i = 0; i < num; i++) {
    result += claps[i % 10];
  }
  return result;
}
