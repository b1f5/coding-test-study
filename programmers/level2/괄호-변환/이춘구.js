// @ts-check
/**
 * @param {string} p
 * @returns {string}
 */
function solution(p) {
  if (isRightParentheses(p)) return p;

  return makeRightParentheses(p);
}

/**
 * u와 v로 나누는 함수
 * @param {string} w
 * @returns {string[]}
 */
function seperate(w) {
  let u = "";
  let v = "";

  let open = 0;
  let close = 0;

  for (let i = 0; i < w.length; i += 1) {
    const parenthesis = w[i];

    if (parenthesis === "(") open += 1;
    else close += 1;

    if (open === close) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  return [u, v];
}

/**
 * 올바른 괄호 문자열인지 판별하는 함수
 * @param {string} parentheses
 * @returns {boolean}
 */
function isRightParentheses(parentheses) {
  const pair = {
    "(": ")",
    ")": "(",
  };
  const stack = [];

  for (const parenthesis of parentheses) {
    if (parenthesis === ")" && stack.length === 0) return false;

    const pairParenthesis = pair[parenthesis];

    if (parenthesis === stack.at(-1)) stack.pop();
    else stack.push(pairParenthesis);
  }

  return !stack.length;
}

/**
 * '('와 ')'를 바꾸는 함수
 * @param {string} parentheses
 * @returns {string}
 */
function flip(parentheses) {
  let result = "";
  const pair = {
    "(": ")",
    ")": "(",
  };

  for (const parenthesis of parentheses) {
    result += pair[parenthesis];
  }

  return result;
}

/**
 * 올바른 괄호 문자열로 변환하는 알고리즘
 * @param {string} parentheses
 * @returns {string}
 */
function makeRightParentheses(parentheses) {
  if (parentheses.length === 0) parentheses;

  const [u, v] = seperate(parentheses);

  if (isRightParentheses(u)) {
    const rightV = v.length === 0 ? v : makeRightParentheses(v);

    return u + rightV;
  } else {
    const rightV = makeRightParentheses(v);
    const trimmedU = u.slice(1, u.length - 1);
    const flippedU = flip(trimmedU);

    return "(" + rightV + ")" + flippedU;
  }
}
