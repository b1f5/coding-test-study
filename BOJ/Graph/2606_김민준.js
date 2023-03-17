/* 바이러스 */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const COMPUTER_COUNT = +input.shift();
const PAIR_COUNT = +input.shift();
const PAIR_LIST = input.map((pair) => {
  return pair.split(' ').map(Number);
});

function solution(COMPUTER_COUNT, PAIR_LIST) {
  let graph = {};
  const makeGraph = (PAIR_LIST) => {
    for(let i=1; i<=COMPUTER_COUNT; i+=1) {
      graph[i] = [];
    }

    PAIR_LIST.forEach(([start, end]) => {
      graph[start].push(end);
      graph[end].push(start);  
    });
  }

  const BFS = (start) => {
    let result = 0;
    let queue = [];
    let visited = Array.from({ length: COMPUTER_COUNT + 1 }, () => false);

    queue.push(start);
    visited[start] = true;

    while(queue.length) {
      let node = queue.shift();

      for(const nextNode of graph[node]) {
        if(!visited[nextNode]) {
          queue.push(nextNode);
          visited[nextNode] = true;
          result += 1;
        }
      }
    }

    console.log(result);    
  };

  makeGraph(PAIR_LIST);
  BFS(1);
}

solution(COMPUTER_COUNT, PAIR_LIST);
