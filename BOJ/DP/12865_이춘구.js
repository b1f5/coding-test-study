const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [MAX_COUNT, MAX_LIMIT] = input[0].split(" ").map(Number);
const items = [undefined];
items.push(...input.slice(1).map((e) => e.split(" ").map(Number)));

const DP = Array.from({ length: MAX_COUNT + 1 }, () =>
  new Array(MAX_LIMIT + 1).fill(0)
);

for (let count = 1; count <= MAX_COUNT; count += 1) {
  const [weight, value] = items[count];

  for (let limit = 0; limit <= MAX_LIMIT; limit += 1) {
    if (limit < weight) DP[count][limit] = DP[count - 1][limit];
    else
      DP[count][limit] = Math.max(
        DP[count - 1][limit],
        DP[count - 1][limit - weight] + value
      );
  }
}
console.log(DP[MAX_COUNT][MAX_LIMIT]);
