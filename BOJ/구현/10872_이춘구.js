const input = require("fs").readFileSync("/dev/stdin");

solution(+input);

function solution(input) {
  let answer = 1;

  if (input !== 0) {
    for (let i = 1; i <= input; i += 1) {
      answer *= i;
    }
  }

  console.log(answer);
}
