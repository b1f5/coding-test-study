let [N, coords] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

coords = coords.split(" ").map(Number);

const sortedUniqueCoords = Array.from(new Set(coords)).sort((a, b) => a - b);

const dict = sortedUniqueCoords.reduce((dict, curr, index) => {
  dict[curr] = index;
  return dict;
}, {});

for (const coord of coords) {
  answer.push(dict[coord]);
}

console.log(answer.join(" "));
