const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let nearest = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const target = arr[i] + arr[j] + arr[k];
      if (target <= M && target > nearest) {
        nearest = target;
      }
    }
  }
}

console.log(nearest);
