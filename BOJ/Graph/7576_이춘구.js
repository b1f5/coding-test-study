const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [width, height] = input[0].split(" ").map(Number);
let tomatoCount = 0;
let ripeCount = 0;
let ripeTomatoes = [];
let day = 0;
const graph = input.slice(1).map((e, i) =>
  e.split(" ").map((v, j) => {
    if (v !== "-1") tomatoCount += 1;
    if (v === "1") {
      ripeCount += 1;
      ripeTomatoes.push([i, j]);
    }

    return Number(v);
  })
);

while (ripeTomatoes.length > 0) {
  const newlyRipeTomatoes = [];

  ripeTomatoes.forEach(([r, c]) => {
    const aroundTomatoes = getUnripesAround([r, c]);
    aroundTomatoes.forEach(([r, c]) => {
      if (graph[r][c] === 0) {
        graph[r][c] = 1;
        ripeCount += 1;
      }
    });
    newlyRipeTomatoes.push(...aroundTomatoes);
  });

  ripeTomatoes = newlyRipeTomatoes;

  if (newlyRipeTomatoes.length !== 0) day += 1;
}

console.log(tomatoCount === ripeCount ? day : -1);

function getUnripesAround(centerCoord) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const [cR, cC] = centerCoord;
  const result = [];

  directions.filter(([dR, dC]) => {
    const newR = cR + dR;
    const newC = cC + dC;
    const isInRange = newR >= 0 && newR < height && newC >= 0 && newC < width;

    if (isInRange && graph[newR][newC] === 0) result.push([newR, newC]);
  });

  return result;
}
