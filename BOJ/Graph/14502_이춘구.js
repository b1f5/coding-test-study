const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [HEIGHT, WIDTH] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((r) => r.split(" "));

const virusCoords = [];
const emptyCoords = [];

const SYMBOL = {
  empty: "0",
  wall: "1",
  virus: "2",
};

const DIRS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const answers = [];

lab.forEach((r, i) => {
  r.forEach((c, j) => {
    if (c === SYMBOL.empty) emptyCoords.push([i, j]);
    else if (c === SYMBOL.virus) virusCoords.push([i, j]);
  });
});

// 빈 곳에 벽 3개씩 채우고 전체 감염 한 바퀴 반복
for (let i = 0; i < emptyCoords.length - 2; i += 1) {
  for (let j = i + 1; j < emptyCoords.length - 1; j += 1) {
    for (let k = j + 1; k < emptyCoords.length; k += 1) {
      const copiedLab = JSON.parse(JSON.stringify(lab));
      const copiedVirusCoords = JSON.parse(JSON.stringify(virusCoords));
      // 안전구역 갯수 = 빈 곳 수 - 벽 3개
      const safeZone = emptyCoords.length - 3;
      let infection = 0;

      // 벽 3곳에 세우기
      const [r1, c1] = emptyCoords[i];
      const [r2, c2] = emptyCoords[j];
      const [r3, c3] = emptyCoords[k];
      copiedLab[r1][c1] = SYMBOL.wall;
      copiedLab[r2][c2] = SYMBOL.wall;
      copiedLab[r3][c3] = SYMBOL.wall;

      // 감염시키기(DFS)
      while (copiedVirusCoords.length !== 0) {
        const [vR, vC] = copiedVirusCoords.pop();
        const temp = [];

        for (const [r, c] of DIRS) {
          const newR = vR + r;
          const newC = vC + c;

          const inLab = newR >= 0 && newR < HEIGHT && newC >= 0 && newC < WIDTH;
          if (!inLab) continue;

          const isEmpty = copiedLab[newR][newC] === SYMBOL.empty;
          if (isEmpty) {
            copiedLab[newR][newC] = SYMBOL.virus;
            infection += 1;
            temp.push([newR, newC]);
          }
        }
        copiedVirusCoords.push(...temp);
      }
      answers.push(safeZone - infection);
    }
  }
}

console.log(Math.max(...answers));
