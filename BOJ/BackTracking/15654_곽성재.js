const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [[N, M], arr] = input.map((el) => el.split(" ").map(Number));

const visited = Array(N).fill(false);
arr.sort((a, b) => a - b);

const result = [];

const temp = [];
const DFS = (L) => {
  if (L >= M) {
    result.push(temp.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      temp.push(arr[i]);
      visited[i] = true;
      DFS(L + 1);
      temp.pop();
      visited[i] = false;
    }
  }
};

DFS(0);

console.log(result.join("\n"));
