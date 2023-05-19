const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const nodes = input.map((str) => str.split(" ").map(Number));

const board = [];

// 인접행렬 사용 시 메모리 초과
for (let i = 0; i <= N; i++) {
  // board.push(new Array(N + 1).fill(false));
  board.push(new Array(0));
}

nodes.forEach(([left, right]) => {
  // board[left][right] = true;
  // board[right][left] = true;
  board[left].push(right);
  board[right].push(left);
});

console.log(board);

const answer = {};
for (let i = 2; i <= N; i++) {
  answer[i] = 0;
}

const DFS = (parent, next) => {
  answer[next] = parent;
  board[next].forEach((nextNode) => {
    if (nextNode !== parent) DFS(next, nextNode);
  });
};

board[1].forEach((nextNode) => {
  DFS(1, nextNode);
});

// console.log(answer);
// { nodeNumber: parentNodeValue }
console.log(Object.values(answer).join("\n"));
