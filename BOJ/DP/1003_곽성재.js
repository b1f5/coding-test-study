const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = input.slice(1);

const DP_ZERO = [1, 0];
const DP_ONE = [0, 1];

// case는 0 ~ 40
for (let i = 2; i <= 40; i++) {
  DP_ONE[i] = DP_ONE[i - 1] + DP_ONE[i - 2];
  DP_ZERO[i] = DP_ZERO[i - 1] + DP_ZERO[i - 2];
}

// 0출력 1출력 (개수)
// 1 0
// 0 1
// 1 1 => 여기서부터 각 값은 위에꺼 두개를(인덱스-1, 인덱스-2) 합한것과 같아짐
// 1 2
// 2 3
// 3 5
// 5 8

cases.forEach((v) => {
  console.log(DP_ZERO[v], DP_ONE[v]);
});
