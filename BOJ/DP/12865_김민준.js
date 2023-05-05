/* 평범한 배낭 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N = 물품의 수, K = 버틸 수 있는 무게
const [N, K] = input.shift().split(' ').map(Number);
const PRODUCT_INFO_LIST = input.map((info) => {
  return info.split(' ').map(Number);
});

function solution(N, K, PRODUCT_INFO_LIST) {
  // 인덱스를 무게로 가지고, 값은 가치로 가지는 배열
  let dp = Array.from({ length: K + 1 }, () => 0);

  for (const INFO of PRODUCT_INFO_LIST) {
    const [WEIGHT, VALUE] = INFO;

    // for (let i=WEIGHT; i<=K; i+=1) { ... } 와 같이 하면 안됨
    // 처음부터 순회할경우 값이 누적이 되기 때문.

    // 예를 들어 N = 1, K = 5 이고,
    // 무게가 1, 가치가 10인 물건 단 한개만 있다고 하면,
    // for (let i=WEIGHT; i<=K; i+=1) { ... } 와 같이 할 경우
    // dp[1] = 10, dp[2] = dp[1] + 10, dp[3] = dp[2] + 10, ...
    // 와 같이 계속 10의 누적 합이 된다.
    // 무게가 10인 물건은 단 한개이므로 누적이 되면 안된다.
    for (let i = WEIGHT; i <=K; i -= 1) {
      // WEIGHT에 해당하는 기치의 물건을 넣지 않았을 때와
      // 물건을 넣었을 때의 가치를 비교해서 더 큰값으로 설정
      dp[i] = Math.max(dp[i], dp[i - WEIGHT] + VALUE);
    }
  }

  console.log(dp[K]);
}

solution(N, K, PRODUCT_INFO_LIST);
