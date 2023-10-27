const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MaxHeap {
  #heap = [];

  enqueue(value) {
    this.#heap.push(value);
    this.#bubbleUp(this.#heap.length - 1);
  }

  dequeue() {
    this.#swap(0, this.#heap.length - 1);
    const value = this.#heap.pop();
    this.#bubbleDown(0);

    return value;
  }

  #bubbleUp(currIndex) {
    const parentIndex = Math.floor((currIndex - 1) / 2);
    if (this.#valueOf(currIndex) > this.#valueOf(parentIndex)) {
      this.#swap(currIndex, parentIndex);
      this.#bubbleUp(parentIndex);
    }
  }

  #bubbleDown(currIndex) {
    const leftChildIndex = currIndex * 2 + 1;
    const rightChildIndex = currIndex * 2 + 2;
    let maxIndex = currIndex;

    if (
      this.#valueOf(leftChildIndex) &&
      this.#valueOf(leftChildIndex) > this.#valueOf(maxIndex)
    ) {
      maxIndex = leftChildIndex;
    }

    if (
      this.#valueOf(rightChildIndex) &&
      this.#valueOf(rightChildIndex) > this.#valueOf(maxIndex)
    ) {
      maxIndex = rightChildIndex;
    }

    if (maxIndex !== currIndex) {
      this.#swap(currIndex, maxIndex);
      this.#bubbleDown(maxIndex);
    }
  }

  #valueOf(index) {
    return this.#heap[index];
  }

  #swap(a, b) {
    [this.#heap[a], this.#heap[b]] = [this.#heap[b], this.#heap[a]];
  }
}

const maxHeap = new MaxHeap();
const answer = [];

for (const input of inputs) {
  if (input === 0) {
    const value = maxHeap.dequeue() ?? 0;
    answer.push(value);
  } else {
    maxHeap.enqueue(input);
  }
}

console.log(answer.join("\n"));
