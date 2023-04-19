const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [w, h] = input.splice(0, 1)[0].split(" ");
const N = input.splice(0, 1)[0];
const lines = input.map((_) => _.split(" ").map(Number));

const horizon = lines.filter((el) => el[0] === 0).sort((a, b) => a[1] - b[1]);
// prettier-ignore
const vertical = lines.filter((el) => el[0] === 1).sort((a, b) => a[1] - b[1]).map((el) => el[1]);

const widths = [];
const heights = [];

const result = [];

horizon.forEach(([_, line], idx, arr) => {
  if (idx === arr.length - 1) {
    heights.push(h - line);
  }
  if (idx === 0) {
    heights.push(line);
  } else {
    heights.push(line - arr[idx - 1][1]);
  }
});

vertical.forEach((el, i, arr) => {
  if (i === vertical.length - 1) {
    widths.push(w - el);
  }
  if (i === 0) {
    widths.push(el);
  } else {
    widths.push(el - arr[i - 1]);
  }
});

if (widths.length === 0) {
  widths.push(w);
}

if (heights.length === 0) {
  heights.push(h);
}

for (const i of heights) {
  for (const j of widths) {
    result.push(i * j);
  }
}

console.log(Math.max(...result));
