const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = input.slice(1).map(Number);

const DP = Array(11).fill(0);

DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i < DP.length; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

console.log(DP);

cases.forEach((temp) => {
  console.log(DP[temp]);
});
