const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [NM, ...rest] = input;
const [destR, destC] = NM.split(" ").map((v) => Number(v) - 1);
const graph = rest.map((e) => e.split("").map(Number));

let needVisit = [[0, 0]];

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

while (needVisit.length > 0) {
  const [r, c] = needVisit.shift();

  if (r === destR && c === destC) break;

  for (const [dR, dC] of directions) {
    const newR = r + dR;
    const newC = c + dC;
    const isInRange =
      newR >= 0 &&
      newR <= destR &&
      newC >= 0 &&
      newC <= destC &&
      graph[newR][newC] === 1;

    if (isInRange) {
      graph[newR][newC] = graph[r][c] + 1;
      needVisit.push([newR, newC]);
    }
  }
}

console.log(graph[destR][destC]);
