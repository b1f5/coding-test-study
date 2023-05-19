const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

//첫 줄에 물품의 수 N(1 ≤ N ≤ 100)과 준서가 버틸 수 있는 무게 K(1 ≤ K ≤ 100,000)
const [N, K] = input.shift().split(" ").map(Number);
const packages = input.map((str) => str.split(" ").map(Number));

const weights = new Array(N).fill(0);
const values = new Array(N).fill(0);

packages.forEach(([w, v], i) => {
  weights[i] = w;
  values[i] = v;
});

const DFS = (L, sum) => {
  if (L === N) return 0;

  let sumOfIncludes = 0;
  if (weights[L] + sum <= K) {
    sumOfIncludes = values[L] + DFS(L + 1, weights[L] + sum);
  }

  let sumOfNotIncludes = 0;
  sumOfNotIncludes = DFS(L + 1, sum);

  return Math.max(sumOfIncludes, sumOfNotIncludes);
};

console.log(DFS(0, 0));
