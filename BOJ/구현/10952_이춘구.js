const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const answer = [];

  input.forEach((inp) => {
    const [A, B] = inp.split(" ").map(Number);
    if (A + B !== 0) answer.push(A + B);
  });

  console.log(answer.join("\n"));
}
