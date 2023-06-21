const [str1, str2] = `AAACATCG
ACCTAAAA`
  .toString()
  .trim()
  .split("\n");

// const [str1, str2] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// AAACATCG ACCTAAAA <- 예외 케이스 통과 못함
function solution1() {
  const STR1_LENGTH = str1.length;
  const STR2_LENGTH = str2.length;

  const dp = Array.from({ length: STR1_LENGTH }, () =>
    new Array(STR2_LENGTH).fill(0)
  );

  const visited = Array.from({ length: STR1_LENGTH }, () =>
    new Array(STR2_LENGTH).fill(false)
  );

  const DIR = [
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  if (str1[0] === str2[0]) dp[0][0] = 1;

  for (let i = 0; i < STR1_LENGTH; i += 1) {
    for (let j = 0; j < STR2_LENGTH; j += 1) {
      const currVal = dp[i][j];
      visited[i][j] = true;

      for (const [r, c] of DIR) {
        if (i + r >= STR1_LENGTH || j + c >= STR2_LENGTH) continue;

        const nextVal = dp[i + r][j + c];
        const isVisited = visited[i + r][j + c];

        if (isVisited) {
          dp[i + r][j + c] = Math.max(currVal, nextVal);
          continue;
        }

        if (str1[i + r] === str2[j + c]) dp[i + r][j + c] = currVal + 1;
        else dp[i + r][j + c] = currVal;

        visited[i + r][j + c] = true;
      }
    }
  }

  console.log(dp[STR1_LENGTH - 1][STR2_LENGTH - 1]);
}

// 통과
function solution2() {
  const dp = Array.from(Array(STR1_LENGTH + 1), () =>
    Array(STR2_LENGTH + 1).fill(0)
  );

  for (let i = 1; i <= STR1_LENGTH; i++) {
    for (let j = 1; j <= STR2_LENGTH; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  console.log(dp[STR1_LENGTH][STR2_LENGTH]);
}
