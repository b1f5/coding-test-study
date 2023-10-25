// const [N, M] = `4 3`.toString().trim().split(" ").map(Number);
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const numbers = Array.from({ length: N }).map((_, i) => i + 1);
const visited = new Array(N).fill(false);
const answer = [];

function backtrack(count, start, arr) {
  if (count === M) {
    answer.push(arr.join(" "));
    return;
  }

  for (let i = start; i < N; i += 1) {
    if (visited[i]) continue;

    visited[i] = true;
    arr.push(numbers[i]);
    backtrack(count + 1, i, arr);
    arr.pop();
    visited[i] = false;
  }
}

backtrack(0, 0, []);
console.log(answer.join("\n"));
