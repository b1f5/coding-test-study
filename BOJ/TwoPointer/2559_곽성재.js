const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
let temp = sum;

for (let i = K; i < N; i++) {
  temp += arr[i] - arr[i - K];
  sum = Math.max(temp, sum);
}
console.log(sum);

// let sum = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);

// for (let i = 1; i <= N - K; i++) {
//   let temp = 0;
//   for (let j = i; j < i + K; j++) {
//     temp += arr[j];
//   }
//   sum = Math.max(sum, temp);
// }

// console.log(sum);
