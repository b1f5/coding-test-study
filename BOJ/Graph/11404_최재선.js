/* eslint-disable no-shadow */
const fs = require('fs');

let [n, m, ...maps] = fs.readFileSync('./input.txt').toString().trim().split('\n');

n = Number(n);
m = Number(m);
maps = maps.map((el) => el.split(' ').map((el, index) => (index === 2 ? Number(el) : Number(el) - 1)));

const costs = new Array(n).fill().map(() => new Array(n).fill(Infinity));

for (const map of maps) {
  const [start, end, cost] = map;

  costs[start][end] = Math.min(costs[start][end], cost);
}

for (let via = 0; via < n; via += 1) {
  for (let start = 0; start < n; start += 1) {
    for (let end = 0; end < n; end += 1) {
      if (start !== end) {
        costs[start][end] = Math.min(costs[start][end], costs[start][via] + costs[via][end]);
      }
    }
  }
}

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (costs[i][j] === Infinity) costs[i][j] = 0;
  }
}

console.log(costs.map((el) => el.join(' ')).join('\n'));
