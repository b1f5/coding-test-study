const [start, end] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const locations = [[start, 0]];
const visits = new Array(100001).fill(false);

function solution() {
  while (true) {
    const [currLocation, second] = locations.shift();
    if (currLocation === end) return second;

    visits[currLocation] = true;

    const forward = currLocation + 1;
    const backward = currLocation - 1;
    const jump = currLocation * 2;

    for (const location of [forward, backward, jump]) {
      if (!visits[location] && 0 <= location && location <= 100000) {
        visits[location] = true;
        locations.push([location, second + 1]);
      }
    }
  }
}

console.log(solution());
