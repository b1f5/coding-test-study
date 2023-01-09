function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    let tester = s.slice(i) + s.slice(0, i);
    if (calculate(tester)) answer++;
  }
  return answer;
}

function calculate(str) {
  const stack = [];
  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  let candidate;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === "[" || el === "{" || el === "(") {
      stack.push(el);
      candidate = el;
    } else if (candidate === pairs[el]) {
      stack.pop();
      if (stack.length === 0) {
        candidate = "";
      } else {
        candidate = stack[stack.length - 1];
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(solution("[](){}"));
console.log(solution("[{]}"));
