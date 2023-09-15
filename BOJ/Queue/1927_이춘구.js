const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
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

    if (this.#heap[currIndex] < this.#heap[parentIndex]) {
      this.#swap(currIndex, parentIndex);
      this.#bubbleUp(parentIndex);
    }
  }

  #bubbleDown(currIndex) {
    const leftChildIndex = currIndex * 2 + 1;
    const rightChildIndex = currIndex * 2 + 2;
    let minIndex = currIndex;

    if (
      this.#heap[leftChildIndex] &&
      this.#heap[leftChildIndex] < this.#heap[minIndex]
    ) {
      minIndex = leftChildIndex;
    }

    if (
      this.#heap[rightChildIndex] &&
      this.#heap[rightChildIndex] < this.#heap[minIndex]
    ) {
      minIndex = rightChildIndex;
    }

    if (currIndex !== minIndex) {
      this.#swap(currIndex, minIndex);
      this.#bubbleDown(minIndex);
    }
  }

  #swap(a, b) {
    [this.#heap[a], this.#heap[b]] = [this.#heap[b], this.#heap[a]];
  }
}

const answer = [];
const minHeap = new MinHeap();

inputs.forEach((input) => {
  if (input === 0) {
    const smallestValue = minHeap.dequeue() ?? 0;
    answer.push(smallestValue);
  } else {
    minHeap.enqueue(input);
  }
});

console.log(answer.join("\n"));
