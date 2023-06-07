/* 최단경로 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [V, E] = input.shift().split(' ').map(Number);
const K = +input.shift();
const EDGE_LIST = input.map((edge) => {
  return edge.split(' ').map(Number);
});

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // element, priority 삽입
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let isContain = false;

    for (let i = 0; i < this.queue.length; i++) {
      /* priority의 값이 작을수록 더 높은 우선순위를 가진다. */
      // 새로 들어온 값의 우선순위가 queue에 있는 우선순위보다 작으면,
      // 즉 새로 들어온 값의 우선순위가 더 높다면,
      if (this.queue[i].priority > qElement.priority) {
        // i번째에 삽입
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }

    // 삽입되지 못하였을때,
    // 즉 새로 들어온 값의 우선순위가 기존 큐에 있던 element들의 우선순위들 보다
    // priority의 값이 클경우(priority가 낮을 경우)
    if (!isContain) {
      this.queue.push(qElement);
    }
  }

  // 맨 처음 값 pop
  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    } else {
      console.log('Priority Queue is Empty!');
    }
  }

  // 비어있는지 판단
  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }
}

/**
 *
 * @param {number} V 정점의 개수
 * @param {number} E 간선의 개수
 * @param {number} K 시작 정점의 번호
 * @param {number[]} EDGE_LIST 간선 리스트
 */
function solution(V, E, K, EDGE_LIST) {
  let graph = {};

  EDGE_LIST.forEach((edge) => {
    // u: 시작 노드
    // v: 도착 노드
    // w: u에서 v로가는 간선의 가중치
    let [u, v, w] = edge;

    if (graph[u]) {
      graph[u].push({ end: v, weight: w });
    } else {
      graph[u] = [{ end: v, weight: w }];
    }
  });

  // console.log(graph);

  // 인덱스가 노드, 값이 해당 노드에 도착하기 위한 총 가중치
  let totalWeightList = Array.from({ length: V + 1 }, () => Infinity);
  let pq = new PriorityQueue();
  pq.enqueue(K, 0);
  // 시작점 자신은 0으로 설정
  totalWeightList[K] = 0;

  while (!pq.isEmpty()) {
    let qElement = pq.dequeue();
    let curNode = qElement.element;
    let curWeight = qElement.priority;

    // 만약 curNode에 도착하기 위한 저장된 가중치가 현재 계산한 가중치보다 작다면,
    if (totalWeightList[curNode] < curWeight) {
      continue;
    }
    // 현재 node로부터 출발하는 간선이 없다면,
    if (!graph[curNode]) {
      continue;
    }

    // console.log('curNode: ', curNode);
    graph[curNode].forEach((next) => {
      let nextNode = next.end;
      let nextWeight = curWeight + next.weight;

      // 만약 새로 계산한 가중치가 저장된 가중치보다 작다면 대체
      if (nextWeight < totalWeightList[nextNode]) {
        totalWeightList[nextNode] = nextWeight;
        pq.enqueue(nextNode, nextWeight);
      }
    });
  }

  // console.log(totalWeightList);

  let result = '';
  for (let i = 1; i <= V; i += 1) {
    let totalWeight = totalWeightList[i];
    result += totalWeight === Infinity ? 'INF' : totalWeight;
    result += '\n';
  }

  console.log(result);
}

solution(V, E, K, EDGE_LIST);
