const [N, M, rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const INITIAL_CHANNEL = 100;
const targetChannel = Number(N);
let brokenButtons = [];
if (M !== "0") brokenButtons = rest.split(" ");

const onlyUpDown = Math.abs(INITIAL_CHANNEL - targetChannel);
let answer = onlyUpDown;

for (let i = 0; i <= 1000000; i += 1) {
  const curr = i.toString().split("");
  if (curr.some((v) => brokenButtons.includes(v))) continue;
  else {
    answer = Math.min(
      answer,
      Math.abs(Number(i) - targetChannel) + Number(curr.length)
    );
  }
}

console.log(answer);
