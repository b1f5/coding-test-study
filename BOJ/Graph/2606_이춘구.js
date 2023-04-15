const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [computerCount, _, ...rest] = input;
const graph = rest.reduce((graph, nodes) => {
  const [from, to] = nodes.split(" ");

  if (graph[from]) graph[from].push(to);
  else graph[from] = [to];

  if (graph[to]) graph[to].push(from);
  else graph[to] = [from];

  return graph;
}, {});

console.log(dfs());

function dfs() {
  const infected = new Array(Number(computerCount) + 1).fill(false);
  const willInfected = ["1"];
  let infectedCount = 0;

  while (willInfected.length > 0) {
    const curr = willInfected.pop();

    if (!infected[curr]) {
      infected[curr] = true;
      infectedCount += 1;
      willInfected.push(...graph[curr]);
    }
  }

  return infectedCount - 1;
}
