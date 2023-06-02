const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const triangle = input.slice(1).map((str) => str.split(" ").map(Number));

if (N === 1) {
  console.log(triangle[0][0]);
} else {
  // [[7], [10, 15]]
  const DP = [[triangle[0][0]], [triangle[0][0] + triangle[1][0], triangle[0][0] + triangle[1][1]]];

  // 3층부터 로직이 시작
  for (let i = 2; i < N; i++) {
    const temp = [];
    temp.push(DP[i - 1][0] + triangle[i][0]);
    for (let j = 1; j < i; j++) {
      const one = DP[i - 1][j - 1] + triangle[i][j];
      const two = DP[i - 1][j] + triangle[i][j];
      temp.push(Math.max(one, two));
    }
    temp.push(DP[i - 1][i - 1] + triangle[i][i]);
    DP.push(temp);
  }
  // console.log(DP);
  console.log(Math.max(...DP[N - 1]));
}
