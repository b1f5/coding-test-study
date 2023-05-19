const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let table = input.slice(0, N).map((str) =>
  str
    .split(" ")
    .map(Number)
    .reduce((prev, cur, i) => [...prev, (prev[i - 1] || 0) + cur], [])
);

const coords = input.slice(N).map((str) => str.split(" ").map(Number));
const arr = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

for (let y = 1; y < N; y++) {
  for (let x = 0; x < N; x++) {
    table[y][x] = table[y][x] + table[y - 1][x];
    arr[y + 1][x + 1] = table[y][x];
  }
}

for (let i = 1; i <= N; i++) {
  arr[1][i] = table[0][i - 1];
}

const answer = [];

coords.forEach(([x1, y1, x2, y2]) => {
  let sum = 0;
  const total = arr[x2][y2];
  const up = arr[x1 - 1][y2];
  const left = arr[x2][y1 - 1];
  const duplicated = arr[x1 - 1][y1 - 1];
  sum = total - up - left + duplicated;
  answer.push(sum);
});

// console.log(answer);
console.log(answer.join("\n"));
