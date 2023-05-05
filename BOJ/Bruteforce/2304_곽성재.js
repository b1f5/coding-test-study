const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const _ = input
  .slice(1)
  .map((el) => el.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

const pillars = new Array(1001).fill(0);
_.forEach(([i, v]) => {
  pillars[i] = v;
});

const MAX = Math.max(...pillars);
const MAX_IDX = pillars.indexOf(MAX);

let maxL = 0;
let maxR = 0;
let answer = MAX;

for (let i = 0; i < MAX_IDX; i++) {
  maxL = Math.max(maxL, pillars[i]);
  answer += maxL;
}

for (let i = 1000; i > MAX_IDX; i--) {
  maxR = Math.max(maxR, pillars[i]);
  answer += maxR;
}

console.log(answer);
