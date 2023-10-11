let [N, numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
numbers = numbers.split(" ").map(Number);

const dpAsc = new Array(N).fill(1);

for (let i = 1; i < N; i += 1) {
  const currNumber = numbers[i];

  for (let j = 0; j < i; j += 1) {
    const prevNumber = numbers[j];
    if (currNumber > prevNumber && dpAsc[i] <= dpAsc[j]) {
      dpAsc[i] = dpAsc[j] + 1;
    }
  }
}

console.log(Math.max(...dpAsc));
