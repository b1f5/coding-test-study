const [_, ...commands] = require("fs")
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

  pop() {
    if (this.size() === 0) return -1;

    const value = this.#queue[this.#head + 1];
    delete this.#queue[this.#head + 1];
    this.#head += 1;
    if (this.#tail - this.#head === 1) {
      this.#head = 0;
      this.#tail = 1;
    }

    return value;
  }

  size() {
    return this.#tail - this.#head - 1;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    if (this.size() === 0) return -1;
    return this.#queue[this.#head + 1];
  }

  back() {
    if (this.size() === 0) return -1;
    return this.#queue[this.#tail - 1];
  }
}

const queue = new Queue();
const answers = [];

for (const command of commands) {
  const [operation, value] = command.split(" ");
  switch (operation) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      answers.push(queue.pop());
      break;
    case "size":
      answers.push(queue.size());
      break;
    case "empty":
      answers.push(queue.empty());
      break;
    case "front":
      answers.push(queue.front());
      break;
    case "back":
      answers.push(queue.back());
      break;
  }
}

console.log(answers.join("\n"));
