/* 토마토 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// M = 가로(열), N = 세로(행), H = 높이
const [M, N, H] = input.shift().split(' ').map(Number);
// 1 = 익은 토마토, 0 = 익지 않은 토마토, -1 = 토마토 없음
const TOMATO_CONTAINER = input.map((row) => {
  return row.split(' ').map(Number);
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // queue에 맨 끝에 값 넣기
  enqueue(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.size++;
  }

  // queue의 맨 앞에서 빼서 반환하기
  dequeue() {
    if (this.size === 0) {
      return;
    }
    const value = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.size === 0) this.back = null;
    return value;
  }

  // 큐가 비어있는지 판단
  isEmpty() {
    return this.size === 0;
  }
}

// 다 익으면 0, 모두 익지 못하면 -1 출력
function solution(M, N, H, TOMATO_CONTAINER) {
  let farm = [];

  const isValidIndex = (height, row, col) => {
    // height
    if (height < 0 || height >= H) {
      return false;
    }
    // row
    if (row < 0 || row >= N) {
      return false;
    }
    // col
    if (col < 0 || col >= M) {
      return false;
    }

    return true;
  };

  // 3차원 배열로 변환
  for (let k = 0; k < H * N; k += N) {
    let layer = [];
    for (let i = k; i < k + N; i += 1) {
      layer.push(TOMATO_CONTAINER[i]);
    }
    farm.push(layer);
  }

  // 3차원 배열에서의 [dz, dx, dy]
  const DIR_OBJ = {
    up: [-1, 0, 0],
    down: [1, 0, 0],
    left: [0, 0, -1],
    right: [0, 0, 1],
    front: [0, -1, 0],
    back: [0, 1, 0],
  };

  let queue = new Queue();
  let visited = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }, () => false))
  );

  // 총 토마토의 개수
  let leftTomato = 0;
  for (let k = 0; k < H; k += 1) {
    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        // 익은 토마토라면
        if (farm[k][i][j] === 1) {
          // 방문처리
          visited[k][i][j] = true;
          queue.enqueue([k, i, j]);
        }
        // 익지 않은 토마토라면
        if (farm[k][i][j] === 0) {
          leftTomato += 1;
        }
      }
    }
  }

  // 저장될 때부터 모든 토마토가 익어있는 상태
  if (leftTomato === 0) {
    console.log(0);
    return;
  }

  let dayList = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
  );
  while (!queue.isEmpty()) {
    let [height, row, col] = queue.dequeue();

    for (const [D_HEIGHT, D_ROW, D_COL] of Object.values(DIR_OBJ)) {
      const NEW_HEIGHT = height + D_HEIGHT;
      const NEW_ROW = row + D_ROW;
      const NEW_COL = col + D_COL;

      // 인덱스가 주어진 범위를 벗어날 경우
      if (isValidIndex(NEW_HEIGHT, NEW_ROW, NEW_COL) === false) {
        continue;
      }
      // 이미 방문한 곳일 경우
      if (visited[NEW_HEIGHT][NEW_ROW][NEW_COL]) {
        continue;
      }
      // 이미 익은 토마토일 경우
      if (farm[NEW_HEIGHT][NEW_ROW][NEW_COL] === 1) {
        continue;
      }
      // 토마토가 없는 칸일 경우
      if (farm[NEW_HEIGHT][NEW_ROW][NEW_COL] === -1) {
        continue;
      }

      dayList[NEW_HEIGHT][NEW_ROW][NEW_COL] = dayList[height][row][col] + 1;
      leftTomato -= 1;

      // 토마토가 모두 익었을 경우
      if (leftTomato === 0) {
        console.log(dayList[NEW_HEIGHT][NEW_ROW][NEW_COL]);
        return;
      }

      queue.enqueue([NEW_HEIGHT, NEW_ROW, NEW_COL]);
      visited[NEW_HEIGHT][NEW_ROW][NEW_COL] = true;
    }
  }

  // 토마토가 모두 익지 못하는 상황
  console.log(-1);
}

solution(M, N, H, TOMATO_CONTAINER);
