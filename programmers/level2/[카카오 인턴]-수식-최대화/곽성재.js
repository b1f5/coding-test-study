function solution(expression) {
  var answer = 0;
  const numbers = [];
  const operators = [];
  let number = "";
  // - + *
  // 숫자와 연산자를 각각 배열에 담기
  for (let i = 0; i < expression.length; i++) {
    const el = expression[i];
    if (el === "+" || el === "-" || el === "*") {
      operators.push(el);
      numbers.push(number);
      number = "";
    } else {
      number += el;
    }
    if (i === expression.length - 1) {
      numbers.push(number);
    }
  }
  // console.log(numbers, operators);
  return answer;
}

console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
