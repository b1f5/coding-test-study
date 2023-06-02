const [n, ...stories] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

if (n === 1) return console.log(stories[0]);

let sums = stories.at(-1);

for (let i = stories.length - 2; i >= 0; i -= 1) {
  sums = stories[i].map(
    (sum, index) => sum + Math.max(sums[index], sums[index + 1])
  );
}

console.log(sums[0]);
