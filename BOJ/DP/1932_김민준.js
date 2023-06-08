/* 정수 삼각형 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const triangle = input.map((el) => {
  return el.split(' ').map(Number);
});

function solution(n, triangle) {
  // 2차원 배열 깊은 복사
  let dp = triangle.map((row) => [...row]);

  // 거꾸로 맨 밑부터 dp 수행
  for (let i = n - 2; i >= 0; i -= 1) {
    for (let j = 0; j < dp[i].length; j += 1) {
      // 현재 위치의 최댓값은 다음행의 좌,우를 검사해서 큰 값을 더한것
      dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  // 삼각형의 최상단에는 최대 결과값이 저장되어 있음
  let result = dp[0][0];
  console.log(result);
}

solution(n, triangle);
