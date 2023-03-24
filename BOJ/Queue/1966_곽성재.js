const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, ...rest] = input;
const answer = [];

for (let i = 0; i < rest.length; i += 2) {
  const [N, M] = rest[i].split(" ").map((el) => Number(el));
  const priorities = rest[i + 1].split(" ").map((el, i) => [Number(el), i]);
  let cnt = 1;
  while (true) {
    let firstOut = Math.max(...priorities.map((v, i) => v[0]));
    if (priorities[0][1] === M && priorities[0][0] === firstOut) {
      answer.push(cnt);
      break;
    } else if (priorities[0][0] < firstOut) {
      const temp = priorities.shift();
      priorities.push(temp);
    } else if (priorities[0][0] === firstOut) {
      priorities.shift();
      cnt++;
    }
  }
}

console.log(answer.join("\n"));
