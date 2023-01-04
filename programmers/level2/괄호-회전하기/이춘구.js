// @ts-check
/**
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i += 1) {
    // 특정 인덱스 기준으로 뒤쪽과 앞쪽을 붙임
    const brackets = s.slice(i) + s.slice(0, i);
    // 올바른 괄호라면 answer + 1
    if (isRight(brackets)) answer += 1;
  }

  return answer;
}

/**
 * 올바른 괄호 문자열인지 판별하는 함수
 * @param {string} brackets
 * @returns {boolean}
 */
function isRight(brackets) {
  // 여는 괄호에 대응되는 닫는 괄호
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // 여는 괄호가 나왔을 때 닫는 괄호를 저장해두는 스택
  const stack = [];

  for (const bracket of brackets) {
    // 닫는 괄호가 먼저 왔다면 틀린 괄호 문자열
    if (stack.length === 0 && pair[bracket] === undefined) return false;
    // 스택의 마지막 괄호가 현재 괄호와 일치한다면 스택에서 해당 괄호 제거
    if (stack.at(-1) === bracket) stack.pop();
    // 여는 괄호에 대응되는 닫는 괄호 스택에 추가
    else stack.push(pair[bracket]);
  }

  // stack의 길이가 0이라면 올바른 괄호 문자열
  return stack.length === 0 ? true : false;
}
