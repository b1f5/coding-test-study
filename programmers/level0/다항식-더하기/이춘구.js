/**
 * @param {string} polynomial 다항식
 * @returns {number} 동류항끼리 더한 결괏값
 */
function solution(polynomial) {
  // 계수와 상수를 0으로 초기화한다.
  let coefficient = 0;
  let constant = 0;

  // 계수가 생략되어있는 "x"를 "1x"로 변경하고 " + "를 제거해 항들의 배열을 만든다.
  const terms = polynomial.replaceAll(/\bx/g, "1x").split(" + ");

  // 항들을 순회하면서
  terms.forEach((term) => {
    // 항에 "x"가 있다면 변수항이므로, "x"를 제거하고
    // 남아있는 계수를 coefficient에 더하는데 남아있는 게 없다면 1을 더한다.
    if (/x/.test(term)) coefficient += parseInt(term.split("x")[0]) || 1;
    // x가 없다면 상수이므로 constant에 더한다.
    else constant += parseInt(term);
  });

  // 상수를 문자열로 변환해 상수항을 만든다.
  const constantTerm = `${constant}`;

  // 변수항을 빈 문자열로 초기화한다.
  let variableTerm = "";
  // 계수가 1이면 변수항에 계수를 생략한 "x"를 할당한다.
  if (coefficient === 1) variableTerm = "x";
  // 계수가 1보다 크면 "x"에 계수를 붙여서 할당한다.
  else if (coefficient > 1) variableTerm = coefficient + "x";

  // 계수가 0이라면 상수항을 반환한다.
  if (!coefficient) return constantTerm;
  // 상수가 0이라면 변수항을 반환한다.
  else if (!constant) return variableTerm;
  // 둘 다 0이 아니라면 "변수항 + 상수항"을 반환한다.
  else return `${variableTerm} + ${constant}`;
}

const polynomial = "1 + 99x + 7 + x + 0x + 4 + 0";
console.log(solution(polynomial));
