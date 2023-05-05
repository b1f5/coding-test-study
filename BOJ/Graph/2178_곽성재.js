const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const maze = input.map((str) => str.split("").map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
const count = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

// up down left right
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const queue = [[0, 0]];
count[0][0] = 1;
visited[0][0] = true;

while (queue.length) {
  const [curY, curX] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const [dy, dx] = dirs[i];
    const nextX = curX + dx;
    const nextY = curY + dy;

    if (nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) continue;
    if (visited[nextY][nextX]) continue;
    if (maze[nextY][nextX] === 0) continue;

    queue.push([nextY, nextX]);
    visited[nextY][nextX] = true;
    count[nextY][nextX] = count[curY][curX] + 1;
  }
}

console.log(count[N - 1][M - 1]);
