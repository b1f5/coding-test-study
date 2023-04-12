const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [_, __, V] = input[0].split(" ").map(Number);
const graph = input.slice(1).reduce((acc, cur) => {
  const [key, value] = cur.split(" ").map(Number);

  if (acc[key]) {
    acc[key].push(value);
    acc[key] = acc[key].sort((a, b) => a - b);
  } else acc[key] = [value];

  if (acc[value]) {
    acc[value].push(key);
    acc[value] = acc[value].sort((a, b) => a - b);
  } else acc[value] = [key];

  return acc;
}, {});

console.log(DFS(graph, V));
console.log(BFS(graph, V));

// 스택(pop)
function DFS(graph, startV) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startV);

  if (!graph[startV]) return startV;

  while (needVisit.length !== 0) {
    const nextV = needVisit.pop();

    if (!visited.includes(nextV)) {
      visited.push(nextV);
      needVisit = [...needVisit, ...[...graph[nextV]].reverse()];
    }
  }

  return visited.join(" ");
}

// 큐(shift)
function BFS(graph, startV) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startV);

  if (!graph[startV]) return startV;

  while (needVisit.length !== 0) {
    const nextV = needVisit.shift();

    if (!visited.includes(nextV)) {
      visited.push(nextV);
      needVisit = [...needVisit, ...graph[nextV]];
    }
  }

  return visited.join(" ");
}
