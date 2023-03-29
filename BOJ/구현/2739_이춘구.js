const input = require("fs").readFileSync("/dev/stdin").toString();

solution(Number(input));

function solution(input) {
  for (let i = 1; i < 10; i += 1) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}
