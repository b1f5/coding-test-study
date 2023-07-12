const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

// 수빈이의 현재 위치: 0 <= N <= 100000
// 동생의 위치: 0 <= K <= 100000
const visitied = Array(100001).fill(false);

const queue = [[N, 0]];

// queue에 원소에 있는동안 반복을 돌린다
// 큐에는 수빈이가 위치할 좌표와, 이동횟수를 배열로 담는다
while (queue.length) {
  // 한번이동을 cnt로 친다
  const [curPos, cnt] = queue.shift(); // 최초에는 [N, 0]이 뽑힌다

  if (visitied[curPos]) {
    continue;
  }

  visitied[curPos] = true;

  if (curPos === K) {
    console.log(cnt);
    break;
  }

  // 수빈이가 이동할 수 있는 곳: N - 1, N + 1, N * 2
  // 분기처리가 없으면 시간초과
  if (curPos * 2 <= 100000) {
    queue.push([curPos * 2, cnt + 1]);
  }
  if (curPos + 1 <= 100000) {
    queue.push([curPos + 1, cnt + 1]);
  }
  if (curPos - 1 >= 0) {
    queue.push([curPos - 1, cnt + 1]);
  }
}
