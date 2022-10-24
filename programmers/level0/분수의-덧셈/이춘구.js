/**
 * @param {number} denum1 분자1
 * @param {number} num1 분모1
 * @param {number} denum2 분자2
 * @param {number} num2 분모2
 * @returns {[number, number]} 두 분수를 더한 기약분수의 분자와 분모
 */
function solution(denum1, num1, denum2, num2) {
  // 각 분자에 상대 분수의 분모를 곱한 값 둘을 더해 새로운 분자를 만든다.
  const newDenum = denum1 * num2 + denum2 * num1;
  // 분모들을 곱해 새로운 분모를 만든다.
  const newNum = num1 * num2;
  // 새 분모와 새 분자의 최대공약수를 구한다.
  const gcd = calGcd(newNum, newDenum);

  // 새 분모와 새 분자를 최대공약수로 나눠 기약분수로 만들어 반환한다.
  return [newDenum / gcd, newNum / gcd];
}

/**
 * 유클리드 호제법으로 최대공약수를 구한다.
 * @param {number} a 수1
 * @param {number} b 수2
 * @returns {number} 최대공약수
 */
function calGcd(a, b) {
  // a를 b로 나눴을 때의 나머지를 구한다.
  const r = a % b;
  // 나머지가 0이라면 b를 반환하고,
  if (r === 0) return b;
  // 아니라면 b를 나머지로 나눈다.
  return calGcd(b, r);
}
