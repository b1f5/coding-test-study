// @ts-check
/**
 * @param {string} expression "100-200*300-500+20"
 * @returns {number}
 */
function solution(expression) {
  const OPERAND_PATTERN = /([\+\-\*])/g;

  // 사용된 연산자 뽑아내기
  // ['-', '*', '+']
  const operands = Array.from(new Set(expression.match(OPERAND_PATTERN)));

  // 표현식을 배열로 만들기
  // [100, -, 200, *, 300, -, 500, +, 20]
  const seperatedExpression = expression.split(OPERAND_PATTERN);

  // 연산자 우선순위 경우의 수 만들기
  // [[+, -, *], [+, *, -], [-, +, *]...]
  const priorities = getPermutations(operands);

  // 우선순위들을 순회하면서 우선순위에 맞게 계산한 결과를 후보 배열에 넣기
  const candidates = [];

  priorities.forEach((priority) =>
    candidates.push(calculate(seperatedExpression, priority))
  );

  // 후보 중 최댓값 반환하기
  return Math.max(...candidates);
}

/**
 * @param {string[]|number[]} seperatedExpression
 * @param {string} priority
 * @returns {undefined|number}
 */
function calculate(seperatedExpression, priority) {
  let result;
  // 수식 배열 복사, 할당하기
  const expression = [...seperatedExpression];

  // 연산자 하나씩 순회하면서 계산하기
  for (let i = 0; i < priority.length; i += 1) {
    const operand = priority[i];

    while (true) {
      const index = expression.indexOf(operand);
      // 현재 연산자가 없으면 종료하기
      if (index === -1) break;

      // 현재 연산자를 기준으로 앞뒤의 숫자를 연산하기
      const operationResult = operate(
        expression[index - 1],
        operand,
        expression[index + 1]
      );

      // 연산자와 양옆의 숫자를 연산 결과로 바꾸기
      expression.splice(index - 1, 3, operationResult);

      // 수식 배열의 요소가 하나 남았으면 그 절댓값을 결과에 할당하고 종료하기
      if (expression.length === 1) {
        result = Math.abs(Number(expression[0]));
        break;
      }
    }
  }

  return result;
}

/**
 * @param {string|number} a
 * @param {string} operand
 * @param {string|number} b
 * @returns {number}
 */
function operate(a, operand, b) {
  const OPERAND = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  return OPERAND[operand](Number(a), Number(b));
}

/**
 * @param {string[]} arr
 * @returns {string[]}
 */
function getPermutations(arr) {
  const results = [];

  if (arr.length === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
