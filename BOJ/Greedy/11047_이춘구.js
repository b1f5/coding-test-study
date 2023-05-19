const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`
  .toString()
  .trim()
  .split("\n");

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const [nk, ...rest] = input;
let [, totalValue] = nk.split(" ").map(Number);
// 큰 금액부터 계산(그리디)
const coins = rest.map(Number).sort((a, b) => b - a);
let answer = 0;

// 동전을 하나씩 순회하면서
for (const coinValue of coins) {
  // 현재 남은 총 금액에 현재 동전이 몇 개 들어갈 수 있는지 계산
  const coinCount = Math.floor(totalValue / coinValue);

  // 0이라면(현재 동전의 가치가 현재 남은 총 금액보다 크다면) 다음 동전 ㄱ
  if (coinCount === 0) continue;

  // answer에 동전 갯수 더하고, 현재 총 금액을 현재 동전의 가치로 나누고 남은 값 할당
  answer += coinCount;
  totalValue %= coinValue;

  // 현재 남은 총 금액이 0이 되면 종료
  if (totalValue === 0) break;
}

console.log(answer);
