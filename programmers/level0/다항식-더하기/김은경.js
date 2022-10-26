function solution(polynomial) {
  // 변수 coefficient : x의 계수 만들기
  const coefficients = polynomial
    .split('+')
    .map((v) => v.trim())
    .filter((v) => v.includes('x'))
    .map((v) => v.split('x')[0]);
  let coefficient = 0;
  for (let e of coefficients) {
    if (!e) {
      coefficient += 1;
    } else {
      coefficient += parseInt(e);
    }
  }

  // 변수 constant : 상수 만들기
  const constant = polynomial
    .split('+')
    .map((v) => v.trim())
    .filter((v) => !v.includes('x'))
    .reduce((sum, cur) => parseInt(sum) + parseInt(cur), 0);

  // 변수 result : 결과 출력
  if (coefficient === 1) coefficient = '';
  if (coefficient === 0) {
    return `${constant}`;
  } else if (!constant) {
    return `${coefficient}x`;
  } else {
    return `${coefficient}x + ${constant}`;
  }
}
console.log(solution('0+0'));
console.log(solution('x'));
console.log(solution('3x+1+x'));
