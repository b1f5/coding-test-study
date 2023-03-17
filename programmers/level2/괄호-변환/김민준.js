/**
 * 올바른 괄호 문자열인지 판단해서 boolean 값으로 반환하는 함수
 *
 * @param {string} str 괄호 문자열
 * @returns {boolean}
 */
function isValid(str) {
  let cnt = 0;

  for (let i = 0; i < str.length; i += 1) {
    cur = str[i];

    if (cur === '(') {
      cnt += 1;
    } else {
      cnt -= 1;
    }

    if (cnt < 0) return false;
  }

  return true;
}

/**
 * w를 두 "균형잡힌 괄호 문자열" u, v로 분리하는 함수.
 * 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 한다.
 * v는 빈 문자열이 될 수 있다.
 *
 * @param {string} w 괄호 문자열
 * @returns {string[]} u, v
 */
function seperateString(w) {
  let [u, v] = ['', ''];

  let cnt = 0;
  let cur = '';
  for (let i = 0; i < w.length; i += 1) {
    cur = w[i];

    if (cur === '(') {
      cnt += 1;
    } else {
      cnt -= 1;
    }
    u += cur;

    if (cnt === 0) {
      v = w.slice(i + 1);
      break;
    }
  }

  return [u, v];
}

/**
 * 괄호 문자열을 받아서 괄호의 방향을 반대로 해서 반환하는 함수
 *
 * @param {*} str 괄호 문자열
 * @returns {string} 변환한 괄호 문자열
 */
function flip(str) {
  let result = '';
  const pair = {
    '(': ')',
    ')': '(',
  };

  str.split('').forEach((el) => {
    result += pair[el];
  });

  return result;
}

function solution(p) {
  if (p === '') return p;

  let u, v;

  [u, v] = seperateString(p);

  if (isValid(u)) {
    return u + solution(v);
  }

  // 괄호 방향 바꾸기
  return `(${solution(v)})${flip(u.slice(1, -1))}`;
}
