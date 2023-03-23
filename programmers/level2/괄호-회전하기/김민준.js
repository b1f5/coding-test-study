/**
 * 괄호 문자열을 입력받아 한 번 회전해서 반환하는 함수
 * 
 * @param {string} s 괄호 문자열
 * @returns {string}
 */
function rotateString(s) {
  let result = '';
  let bracketList = s.split('');

  bracketList.push(bracketList.shift());
  result = bracketList.join('');

  return result;
}

/**
 * 올바른 괄호 문자열인지 판단해서 결과값을 반환하는 함수
 * 
 * @param {string} s 괄호 문자열 
 * @returns {boolean}
 */
function isValidBracketString(s) {
  let result = true;
  const BRACKET_OPEN = ['(', '{', '['];
  const BRACKET_CLOSE = [')', '}', ']'];

  let stack = [];

  s = s.split('');
  let idx = -1;
  for(const BRACKET of s) {
    // 여는 괄호일경우
    if(BRACKET_OPEN.includes(BRACKET)) stack.push(BRACKET);
    // 닫는 괄호일경우
    else {
      // 닫는 괄호들의 리스트에서 몇번째 인덱스인지 탐색
      idx = BRACKET_CLOSE.indexOf(BRACKET);
      // 스택의 맨 위에 있는 것과 쌍이 맞지 않다면 return false
      if(stack.at(-1) !== BRACKET_OPEN[idx]) return false;
      // 만약 쌍이 맞다면 stack에서 여는 괄호를 pop
      else stack.pop();
    }
  }

  // stack에 남은 괄호가 있다면 짝이 맞지 않는것이므로 false
  if(stack.length > 0) result = false;
  return result;
}

function solution(s) {
  let answer = 0;

  for(let i=0; i<s.length; i+=1) {
    if(isValidBracketString(s)) answer += 1;
    s = rotateString(s);
  }

  return answer;
}

const s = '{{{';
const result = solution(s);
console.log(result);