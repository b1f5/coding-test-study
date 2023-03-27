const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

// const input = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1);

solution(input);

function solution(input) {
  const answer = [];

  input.forEach((inp) => {
    const [A, B] = inp.split(" ").map(Number);
    answer.push(A + B);
  });

  console.log(answer.join("\n"));
}
