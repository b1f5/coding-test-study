const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
/**
정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

X가 3으로 나누어 떨어지면, 3으로 나눈다.
X가 2로 나누어 떨어지면, 2로 나눈다.
1을 뺀다. => 1을 빼주면 앞에 숫자가 된다 === 앞에 숫자가 되는 최솟값을 알면 그 값에서 1을 더해주기만 하면 된다!
정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
*/

const dp = [0, 0, 1, 1];

for (let i = 4; i <= n; i++) {
  // let prevNumbers = [i - 1];
  // if (i % 2 === 0) prevNumbers.push(i / 2);
  // if (i % 3 === 0) prevNumbers.push(i / 3);
  // dp[i] = Math.min(...prevNumbers.map((num) => dp[num])) + 1;
  if (i % 3 === 0 && i % 2 === 0)
    dp[i] = Math.min(dp[i / 2], dp[i / 3], dp[i - 1]) + 1;
  else if (i % 3 === 0) dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
  else if (i % 2 === 0) dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
  else dp[i] = dp[i - 1] + 1;
}

console.log(dp[n]);
