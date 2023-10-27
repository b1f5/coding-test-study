let [N, ...rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Snake {
  #head = null;
  #tail = null;
  #length = 0;

  unshift(value) {
    const newHead = new Node(value);

    if (this.#length === 0) {
      this.#head = newHead;
      this.#tail = newHead;
    } else {
      newHead.next = this.#head;
      this.#head.prev = newHead;
      this.#head = newHead;
    }

    this.#length += 1;
  }

  pop() {
    if (this.#length === 0) return undefined;

    const poppedNodeValue = this.#tail.value;

    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    }

    this.#length -= 1;

    return poppedNodeValue;
  }

  head() {
    return this.#head.value;
  }

  tail() {
    return this.#tail.value;
  }
}

N = Number(N);
const board = Array.from({ length: N }, () => new Array(N).fill("empty"));

const apples = rest.slice(1, Number(rest[0]) + 1);
for (const apple of apples) {
  const [r, c] = apple.split(" ");
  board[r - 1][c - 1] = "apple";
}

const turn = rest.slice(Number(rest[0]) + 2).reduce((obj, cur) => {
  const [sec, dir] = cur.split(" ");
  obj[sec] = dir === "D" ? 1 : -1;
  return obj;
}, {});

const snake = new Snake();
snake.unshift([0, 0]);
board[0][0] = "snake";
// prettier-ignore
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
let heading = 1;
let second = 0;

while (true) {
  second += 1;

  const [hR, hC] = snake.head();
  const [dR, dC] = directions[heading];
  const [newHr, newHc] = [hR + dR, hC + dC];

  // 머리가 보드 바깥이거나 자신과 부딪쳤으면 종료
  if (!isInBoard(newHr, newHc)) break;

  const nextCell = board[newHr][newHc];
  if (nextCell === "snake") break;

  // 빈 곳이면 머리와 꼬리 모두 한 칸 이동
  if (nextCell === "empty") {
    snake.unshift([newHr, newHc]);
    board[newHr][newHc] = "snake";

    const [tR, tC] = snake.pop();
    board[tR][tC] = "empty";
  }

  // 사과가 있다면 머리만 옮겨 늘리기
  if (nextCell === "apple") {
    snake.unshift([newHr, newHc]);
    board[newHr][newHc] = "snake";
  }

  heading = (heading + 4 + (turn[second] ?? 0)) % 4;
}

function isInBoard(r, c) {
  return 0 <= r && r < N && 0 <= c && c < N;
}

console.log(second);
