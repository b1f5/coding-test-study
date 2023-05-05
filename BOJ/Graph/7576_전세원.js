let fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map((el) => Number(el));

let tomatoArr = input.splice(1).map((oneLine) => {
  const oneArr = oneLine.split(" ").map((el) => Number(el));
  return oneArr;
});
//front, back, left, right
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let thisTurnTomaoto = [];
let count = -1;
//초기 queue 넣기..
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoArr[i][j] === 1) {
      thisTurnTomaoto.push([i, j]);
    }
  }
}

while (thisTurnTomaoto.length > 0) {
  let nextTurnTomato = [];
  thisTurnTomaoto.forEach((xy) => {
    const [n, m] = xy;
    for (let i = 0; i < 4; i++) {
      let currentN = dx[i] + n;
      let currentM = dy[i] + m;

      if (currentN < 0 || currentN >= N || currentM < 0 || currentM >= M) {
        continue;
      }
      if (tomatoArr[currentN][currentM] === 0) {
        tomatoArr[currentN][currentM] = 1;
        nextTurnTomato.push([currentN, currentM]);
      }
    }
    thisTurnTomaoto = nextTurnTomato;
  });
  count++;
}

if (tomatoArr.flat(2).includes(0)) {
  console.log(-1);
} else {
  console.log(count);
}
