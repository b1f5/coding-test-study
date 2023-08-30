const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const tricks = {};
input
  .map((str) => str.split(" ").map(Number))
  .forEach(([start, end]) => {
    tricks[start] = end;
  });

const visited = Array.from({ length: 101 }).fill(false);

const BFS = () => {
  const queue = [];
  queue.push([1, 0]);
  while (true) {
    const [curPos, count] = queue.shift();
    if (curPos === 100) return count;

    for (let dice = 1; dice <= 6; dice++) {
      const nextPos = tricks[curPos + dice] || curPos + dice;
      if (nextPos > 100) continue;
      if (visited[nextPos]) continue;

      visited[nextPos] = true;
      queue.push([nextPos, count + 1]);
    }
  }
};

console.log(BFS());
