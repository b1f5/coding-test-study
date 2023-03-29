const input = require("fs").readFileSync("/dev/stdin").toString().trim();

solution(Number(input) - 1);

function solution(input) {
  const fib = [1, 2, 3];

  for (let i = 3; i <= input; i += 1) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 15746;
  }

  console.log(fib[input]);
}
