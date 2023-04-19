const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input[0].split(" ").map(Number);
const [, ..._] = input;

const container = _.map((el) => el.split(" ").map(Number));
const visited = container.map((el) => el.map((e) => (e === -1 ? true : false)));

// 위 아래 왼 오른
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 익은 토마토들이 들어갈 큐 (계속해서 추가가 된다)
const queue = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (container[i][j] === 1) queue.push([j, i]);
  }
}

// 최초 진입시 플러스 되는걸 방어
let cnt = -1;

// 우선 익은 토마토는 방문처리한다
queue.forEach(([x, y]) => (visited[y][x] = true));

let targetIdx = 0;
// 익은 토마토가 1개도 없을 수 있다
let [curX, curY] = queue.length ? queue[queue.length - 1] : [null, null];
// while (queue.length) {
while (true) {
  // js shift가 효율성에서 너무 좋지않아 방법을 바꿈
  if (!queue[targetIdx]) break;
  const [x, y] = queue[targetIdx];
  // const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nextX = dx[i] + x;
    const nextY = dy[i] + y;
    // prettier-ignore
    if (nextX >= 0 && nextY >= 0 && nextX < M && nextY < N && !visited[nextY][nextX]) {
      // 두개의 익은 토마토가 하나의 안익은 토마토를 익게하는 것을 방지
      // 5,2 와 4, 3이  익어있다면, 4, 2를 동시에 익게 만든다
      visited[nextY][nextX] = true;
        if (container[nextY][nextX] === 0) {
          queue.push([nextX, nextY]);
        }
      }
  }

  targetIdx++;

  // 한 루프가 다 돌았다면
  if (x === curX && y === curY && queue.length) {
    cnt++;
    curX = queue[queue.length - 1][0];
    curY = queue[queue.length - 1][1];
  }
}

console.table(visited);

if (visited.some((el) => el.includes(false))) {
  console.log(-1);
} else {
  console.log(cnt);
}
