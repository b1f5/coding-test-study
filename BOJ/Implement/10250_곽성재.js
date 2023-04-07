const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const answer = [];

for (let i = 1; i < input.length; i++) {
  const [H, W, N] = input[i].split(" ").map(Number);
  const horizon = Math.floor((N - 1) / H) + 1;
  const floor = N % H || H;
  // answer.push(`${floor}${horizon < 10 ? "0" + horizon : horizon}`);
  console.log(`${floor}${horizon < 10 ? "0" + horizon : horizon}`);
}

// console.log(answer.join("\n"));
