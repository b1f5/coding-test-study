let [RC, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [R, C] = RC.split(" ").map(Number);
board = board.map((r) => r.split("").map((c) => c.charCodeAt() - 65));
const visited = new Array(26).fill(false);
const DIR = [[-1, 0], [0, 1], [1, 0], [0, -1]];

let answer = 1;

dfs(0, 0, 1);

console.log(answer);

function dfs(r, c, count) {
  const alphabet = board[r][c];
  visited[alphabet] = true;

  for (const [dR, dC] of DIR) {
    const [newR, newC] = [r + dR, c + dC];
    if (isInRange(newR, newC) && !visited[board[newR][newC]]) {
      dfs(newR, newC, count + 1);
    } else {
      answer = Math.max(answer, count);
    }
  }

  visited[alphabet] = false;
}

function isInRange(r, c) {
  return 0 <= r && r < R && 0 <= c && c < C;
}
