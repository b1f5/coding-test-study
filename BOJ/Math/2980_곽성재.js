const { timeStamp, time } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, L] = input.shift().split(" ").map(Number);
const lights = input.map((_) => _.split(" ").map(Number));
lights.unshift([0, 0, 0]);

let times = 0;

const calcWait = (dist, r, g) => {
  const restDist = dist % (r + g);
  return r - restDist < 0 ? 0 : r - restDist;
};

lights.forEach(([d, r, g], idx, arr) => {
  if (idx === 0) return;

  const movingTime = d - arr[idx - 1][0];
  const waitTime = calcWait(times + movingTime, r, g);

  times += movingTime + waitTime;

  if (idx === arr.length - 1) times += L - d;
});

console.log(times);
