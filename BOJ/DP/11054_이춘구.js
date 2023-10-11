let [N, numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
numbers = numbers.split(" ").map(Number);

const dpAsc = new Array(N).fill(1);
const dpDesc = new Array(N).fill(1);

for (let i = 1; i < N - 1; i += 1) {
  const currNumber = numbers[i];

  for (let j = 0; j < i; j += 1) {
    const prevNumber = numbers[j];
    if (currNumber > prevNumber && dpAsc[i] <= dpAsc[j]) {
      dpAsc[i] = dpAsc[j] + 1;
    }
  }
}

for (let i = N - 2; i >= 0; i -= 1) {
  const currNumber = numbers[i];

  for (let j = i; j < N; j += 1) {
    const nextNumber = numbers[j];
    if (currNumber > nextNumber && dpDesc[i] <= dpDesc[j]) {
      dpDesc[i] = dpDesc[j] + 1;
    }
  }
}

const sums = dpAsc.reduce((acc, curr, i) => {
  acc[i] = curr + dpDesc[i] - 1;
  return acc;
}, []);

console.log(Math.max(...sums));
