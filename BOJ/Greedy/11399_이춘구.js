const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [, rest] = input;
const sortedPeople = rest
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const withdrawTimes = [sortedPeople[0]];

const length = sortedPeople.length;
for (let i = 1; i < length; i += 1) {
  withdrawTimes[i] = withdrawTimes[i - 1] + sortedPeople[i];
}

console.log(withdrawTimes.reduce((acc, cur) => acc + cur, 0));
