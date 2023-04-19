const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [L, N] = input.splice(0, 2);
const arr = input.map((el) => el.split(" ").map(Number));

const cake = new Array(+L).fill(-1);

let expectVal = -1;
let expectIdx = -1;
const cnts = [];

arr.forEach(([start, end], idx) => {
  const temp = end - start;
  let cnt = 0;
  for (let i = start - 1; i < end; i++) {
    if (cake[i] === -1) {
      cake[i] = idx + 1;
      cnt++;
    }
  }
  cnts.push(cnt);
  if (temp > expectVal) {
    expectVal = temp;
    expectIdx = idx + 1;
  }
});
const result = [];
result.push(expectIdx, cnts.indexOf(Math.max(...cnts)) + 1);

console.log(result.join("\n"));
