const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((str) => str.split(" ").map(Number));

const kfcs = []; // 치킨집들의 좌표 [[r1, c1], [r2, c2], ...]
const homes = []; // 집들의 좌표 [[r1, c1], [r2, c2], ...]

city.forEach((row, r) => {
  row.forEach((val, c) => {
    if (val === 2) {
      kfcs.push([r, c]);
    } else if (val === 1) {
      homes.push([r, c]);
    }
  });
});

const calcDist = (r1, c1, r2, c2) => {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2);
};

const dists = [];
const isSelected = Array(kfcs.length).fill(false);
const selected = [];

const DFS = (idx, cnt) => {
  if (cnt === M) {
    let sumDist = 0;
    for (const [home_r, home_c] of homes) {
      let minDist = Infinity;
      for (const [kfc_r, kfc_c] of selected) {
        minDist = Math.min(calcDist(home_r, home_c, kfc_r, kfc_c), minDist);
      }
      sumDist += minDist;
    }
    dists.push(sumDist);
  } else {
    for (let i = idx; i < kfcs.length; i++) {
      if (isSelected[i]) continue;
      const kfc = kfcs[i];
      selected.push(kfc);
      isSelected[i] = true;
      DFS(i, cnt + 1);
      selected.pop();
      isSelected[i] = false;
    }
  }
};

DFS(0, 0);

console.log(Math.min(...dists));
