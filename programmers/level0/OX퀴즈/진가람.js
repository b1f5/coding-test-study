/**
 *
 * @param {string[]} quiz +, - 연산자가 포함된 수식 목록
 * @returns {string[]} 수식이 옳은지 O,X 반환
 */
function solution(quiz) {
  return quiz.map((e) => {
    let splited = e.split(' ');
    let [a, operator, b, , result] = splited;
    return calculate(Number(a), Number(b), operator) === Number(result)
      ? 'O'
      : 'X';
  });
}

/**
 *
 * @param {number} a 0부터 9까지 숫자로 이루어진 정수. 음수일 수도 있다.
 * @param {number} b 0부터 9까지 숫자로 이루어진 정수. 음수일 수도 있다.
 * @param {string} operator +, - 중 하나
 * @returns
 */
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      throw new Error('Invalid operator');
  }
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
