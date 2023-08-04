const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
const sections = input.slice(2).map((str) => str.split(" ").map(Number));

// 1번수부터 n번수까지의 합
const sums = Array(N + 1).fill(0); // index보정용으로 +1
for (let i = 1; i < N + 1; i++) {
  sums[i] = sums[i - 1] + nums[i - 1];
}

const answers = [];
for (let i = 0; i < M; i++) {
  answers.push(sums[sections[i][1]] - sums[sections[i][0] - 1]);
}

// for (const [start, end] of sections) {
//   answers.push(sums[end] - sums[start - 1]);
// }

// sections.forEach(([start, end]) => {
//   answers.push(sums[end] - sums[start - 1]);
// });

console.log(answers.join("\n"));
