const [NM, ...rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Queue {
  #queue = {};
  #head = 0;
  #tail = 1;

  push(value) {
    this.#queue[this.#tail] = value;
    this.#tail += 1;
  }

  shift() {
    if (this.length() === 0) return undefined;

    const value = this.#queue[this.#head + 1];
    delete this.#queue[this.#head + 1];
    this.#head += 1;
    if (this.#tail - this.#head === 1) {
      this.#head = 0;
      this.#tail = 1;
    }

    return value;
  }

  length() {
    return this.#tail - this.#head - 1;
  }
}

const [N, M] = NM.split(" ").map(Number);
const maze = rest.map((v) => v.split(""));

// prettier-ignore
const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const visited = Array.from({ length: N }, () => new Array(M).fill(false));
const willVisit = new Queue();
willVisit.push([0, 0, 1]);

while (willVisit.length) {
  const [r, c, answer] = willVisit.shift();

  if (r === N - 1 && c === M - 1) {
    return console.log(answer);
  }

  for (const [dR, dC] of directions) {
    const [newR, newC] = [r + dR, c + dC];

    if (
      isInMaze(newR, newC) &&
      maze[newR][newC] === "1" &&
      !visited[newR][newC]
    ) {
      visited[newR][newC] = true;
      willVisit.push([newR, newC, answer + 1]);
    }
  }
}

function isInMaze(r, c) {
  return 0 <= r && r < N && 0 <= c && c < M;
}
