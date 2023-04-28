const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [H, W, N, M] = input[0].split(" ").map(Number);

console.log(Math.ceil(H / (N + 1)) * Math.ceil(W / (M + 1)));
