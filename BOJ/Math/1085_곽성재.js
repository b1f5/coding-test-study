const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [x, y, w, h] = input[0].split(" ").map(Number);

const answer = Math.min(x, y, w - x, h - y);
console.log(answer);
