const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다.
// => 여기서 문제를 오해
// 각 라인에 적힌 값이 그 집을 해당 색으로 칠하는 소모비용임
// 나는 각 라인이 그냥 고정된 소모비용인줄 암 => 어떤 케이스를 선택해야 최소가 되는가?로 착각함
// 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.

const N = Number(input[0]);
const costs = input.slice(1).map((str) => str.split(" ").map(Number));
const homes = Array.from({ length: N }, () => Array(3).fill(0));
homes[0][0] = costs[0][0]; // 첫 번째 집을 빨강으로 칠하는 경우
homes[0][1] = costs[0][1]; // 첫 번째 집을 초록으로 칠하는 경우
homes[0][2] = costs[0][2]; // 첫 번째 집을 파랑으로 칠하는 경우
// 첫번째집은 위에서 칠해줬으니 두번째집부터 생각
// 두번째(혹은 i번쨰)집을 칠하는 경우는 i번째에 초록으로 칠하고 싶다면, 그전에는 빨강이나 파랑으로 칠하는 경우중 더 적은 값으로 선택한다
// 그러나 이때 각각의 칠하는 비용을 독립적으로 보지말고, 그 색으로 칠하게 된 누적 소모비용을 생각한다
// 다시말해, homse[i][0]는 i번째 집을 빨강으로 (빨강을 먼저 주어주니까) 칠할때의 최적의 비용이며,
// homse[i - 1][1], homse[i - 1][2]중 더 적은 값에다가 costs[i][0]을 더해주면 된다
for (let i = 1; i < N; i++) {
  homes[i][0] = Math.min(homes[i - 1][1], homes[i - 1][2]) + costs[i][0];
  homes[i][1] = Math.min(homes[i - 1][0], homes[i - 1][2]) + costs[i][1];
  homes[i][2] = Math.min(homes[i - 1][0], homes[i - 1][1]) + costs[i][2];
}

console.log(Math.min(...homes[N - 1]));
