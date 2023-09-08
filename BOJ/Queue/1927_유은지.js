const [N, ...ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드랑 비교, 작은 애를 부모 모드로 교환하는 과정 반복
  // [1,2,3,4,5,6,7,8,9]
  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  // 자식 노드랑 비교, 작은 값이 자식보다 밑에 있으면 노드 교환
  heapifyDown(index) {
    const len = this.heap.length;
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (leftChild < len && this.heap[leftChild] < this.heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < len && this.heap[rightChild] < this.heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];
      this.heapifyDown(smallest);
    }
  }

  // 값 힙에 추가, 추가하고 자리잡기
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // 가장 작은 값 반환, 최소값은 항상 루트노드에 있으니깐 추출하고 마지막 요소 루트로 이동켜서 이동
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    const lastIdx = this.heap.length - 1;
    this.heap[0] = this.heap[lastIdx];
    this.heap.pop();
    this.heapifyDown(0);

    return min;
  }
}

const minHeap = new MinHeap();
const answer = [];

for (let i = 0; i < N; i++) {
  const x = ARR[i];

  if (x !== 0) {
    minHeap.insert(x);
  } else {
    const min = minHeap.extractMin() || 0;
    answer.push(min);
  }
}

console.log(answer.join('\n'));
