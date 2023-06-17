const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [str1, str2] = input.map((v) => " " + v); // ' ACACAC'
const len1 = str1.length;
const len2 = str2.length;

const dp = [];
for (let i = 0; i < len2; i++) {
  dp.push(Array(len1).fill(0));
}

for (let row = 1; row < len2; row++) {
  for (let col = 1; col < len1; col++) {
    if (str1[col] === str2[row]) {
      dp[row][col] = dp[row - 1][col - 1] + 1;
    } else {
      dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
    }
  }
}

// console.table(dp);
console.log(dp[dp.length - 1][dp[0].length - 1]);

const LCS = (x, y) => {
  const xLength = x.length;
  const yLength = y.length;
  if (xLength === 0 || yLength === 0) {
    return 0;
  } else {
    if (x[xLength - 1] === y[yLength - 1]) {
      return LCS(x.slice(0, xLength - 1), y.slice(0, yLength - 1)) + 1;
    } else {
      return Math.max(LCS(x.slice(0, xLength), y.slice(0, yLength - 1)), LCS(x.slice(0, xLength - 1), y.slice(0, yLength)));
    }
  }
};

console.log(LCS("ACAYKP", "CAPCAK"));
