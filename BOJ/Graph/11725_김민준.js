/* 트리의 부모 찾기 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const CONNECT_LIST = input.map((connect) => {
  return connect.split(' ').map(Number);
});

function solution(N, CONNECT_LIST) {
  let graph = {};

  const makeGraph = () => {
    for (let i = 1; i <= N; i += 1) {
      graph[i] = [];
    }

    // 무방향 그래프이므로 양방향 모두 세팅
    CONNECT_LIST.forEach((connect) => {
      let [vertex1, vertex2] = connect;

      graph[vertex1].push(vertex2);
      graph[vertex2].push(vertex1);
    });
  };

  // 인덱스가 현재 노드의 번호, 값을 인덱스 번호 노드의 부모 노드를 가지는 배열
  let parentNodeList = Array.from({ length: N + 1 }, () => 0);
  const BFS = () => {
    // 1번 노드의 부모는 자기자신으로 설정(root)
    parentNodeList[1] = 1;

    let queue = [];
    // 1번 노드의 자식 노드들을 큐에 넣어줌
    for (let childNode of graph[1]) {
      parentNodeList[childNode] = 1;
      queue.push(childNode);
    }

    while (queue.length) {
      let node = queue.shift();

      for (let nextNode of graph[node]) {
        // 부모노드가 이미 존재할경우
        if (parentNodeList[nextNode]) {
          continue;
        }
        // 다음노드의 부모를 현재노드로 설정
        parentNodeList[nextNode] = node;
        queue.push(nextNode);
      }
    }
  };

  makeGraph();
  BFS();

  let result = '';
  // 2번노드의 부모부터 출력하므로 slice로 2번부터
  parentNodeList.slice(2).forEach((parentNode) => {
    result += `${parentNode}\n`;
  });

  console.log(result);
}

solution(N, CONNECT_LIST);
