const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCaseCount = Number(input.splice(0, 1));

/**
 * 구역 하나씩 제거해나가는 첫번재 풀이
 */
for (let i = 0; i < testCaseCount; i += 1) {
  const [width, height, cabbageCount] = input.splice(0, 1)[0].split(" ");
  const cabbageCoords = input.splice(0, cabbageCount);

  solution1(width, height, cabbageCoords);
}

function solution1(width, height, cabbageCoordss) {
  let answer = 0;
  let cabbageCoords = [...cabbageCoordss];

  while (cabbageCoords.length !== 0) {
    const areas = DFS(cabbageCoords[0], width, height, cabbageCoords);
    cabbageCoords = cabbageCoords.filter((coord) => !areas.includes(coord));
    answer += 1;
  }

  console.log(answer);
}

function DFS(start, width, height, cabbageCoords) {
  let needVisit = [start];
  const visited = [];

  while (needVisit.length !== 0) {
    const currCoord = needVisit.pop();

    if (!visited.includes(currCoord)) {
      const around = getAroundCoord(currCoord, width, height).filter((coord) =>
        cabbageCoords.includes(coord)
      );
      visited.push(currCoord);
      needVisit = [...needVisit, ...around];
    }
  }

  return visited;
}

function getAroundCoord(centerCoord, width, height) {
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const [cX, cY] = centerCoord.split(" ").map(Number);
  const result = [];

  directions.forEach(([dX, dY]) => {
    const newX = cX + dX;
    const newY = cY + dY;
    const isInRange = newX >= 0 && newX < width && newY >= 0 && newY < height;

    if (isInRange) result.push([newX, newY].join(" "));
  });

  return result;
}

/**
 * 이차원 배열을 이용한 두번째 풀이
 */
for (let i = 0; i < testCaseCount; i += 1) {
  const [width, height, cabbageCount] = input
    .splice(0, 1)[0]
    .split(" ")
    .map(Number);
  const graph = Array.from(Array(height), () => new Array(width).fill(false));

  input.splice(0, cabbageCount).forEach((coord) => {
    const [x, y] = coord.split(" ").map(Number);
    graph[y][x] = true;
  });

  solution2(width, height, graph);
}

function solution2(width, height, graph) {
  let answer = 0;

  for (let x = 0; x < height; x += 1) {
    for (let y = 0; y < width; y += 1) {
      if (graph[x][y]) {
        DFS(x, y, graph);
        answer += 1;
      }
    }
  }

  console.log(answer);
}

function DFS(x, y, graph) {
  const width = graph[0].length;
  const height = graph.length;
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  graph[x][y] = false;

  directions.forEach(([dX, dY]) => {
    const newX = x + dX;
    const newY = y + dY;
    const isInRange = newX >= 0 && newX < height && newY >= 0 && newY < width;

    if (isInRange && graph[newX][newY]) DFS(newX, newY, graph);
  });
}
