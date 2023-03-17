const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [length, times] = input;
times = times.split(" ").map(Number);

// 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값
// 시간의 합은 결국 쌓인다

times.sort((prev, next) => prev - next);

let sum = 0;

for (let i = 0; i < times.length; i++) {
  const el = times[i];
  sum += el * (length - i);
}

console.log(sum);
