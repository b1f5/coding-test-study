const input = require("fs").readFileSync("/dev/stdin");

solution(Number(input));

function solution(input) {
  const answer = [];
  for (let i = 1; i <= input; i += 1) {
    answer.push(i);
  }
  console.log(answer.join("\n"));
}
