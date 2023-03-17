const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [numOfComputers, numOfPairs, ...pairs] = input;
numOfComputers = +numOfComputers;
pairs = pairs.map((el) => el.split(" ").map(Number));

// 방문확인용 (배열 0번째는 무의미)
// const visited = new Array(numOfComputers + 1).fill(false);
const visited = Array.from({ length: numOfComputers + 1 }, () => false);

const DFS = (L) => {
  // 존재하는 컴퓨터숫자보다 커지면 당연히 종료, 방문했다면 종료
  // console.log(L, "을 방문중");
  if (L > numOfComputers) {
    // console.log(L, "RETURN");
    return;
  }
  if (visited[L] === true) {
    // console.log(L, "VISITED");
    return;
  }
  // 방문처리
  visited[L] = true;

  // 연결쌍을 담은 2차원 배열을 돌면서, 현재 방문중인 컴퓨타가 연결된 다른 컴퓨터를 방문처리
  for (let i = 0; i < pairs.length; i++) {
    const [one, two] = pairs[i];
    if (one === L) {
      // console.log(L, "때문에", two, "를 방문하려함");
      DFS(two);
    }
    // 반드시 예제처럼 연결쌍을 주리란 법이 없다
    if (two === L) {
      DFS(one);
    }
  }
};

// 0은 무시하려고 그냥 1부터 실행
DFS(1);

// console.log(visited);

// 1을 빼줘야(1때문에 바이러스가 걸린애를 찾는거지, 1을 찾는건 아님) 정답
console.log(visited.filter((el) => el).length - 1);
