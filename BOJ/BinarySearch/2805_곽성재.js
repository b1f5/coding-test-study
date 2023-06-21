const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [[N, M], trees] = input.map((el) => el.split(" ").map(Number));

let mid = Math.floor(Math.max(...trees) / 2);
let left = 0;
let right = Math.max(...trees);
let prevMid;

while (true) {
  mid = Math.floor((left + right) / 2);

  if (prevMid === mid) {
    console.log(mid);
    break;
  }
  let get = 0;
  // cuttingLine을 기준으로, 얘보다 큰 애들은 잘릴 것이고 얻어갈 수 있다
  for (let j = 0; j < trees.length; j++) {
    const cuttingLine = mid;
    const tree = trees[j];
    if (tree - cuttingLine > 0) get += tree - cuttingLine;
  }

  if (get === M) {
    console.log(mid);
    break;
  } else if (get < M) {
    // 높이조절을 내려야한다 === 왼쪽으로가야한다
    right = mid;
    // mid = Math.floor((mid + left) / 2);
  } else if (get > M) {
    // 높이조절을 올려야한다 === 오른쪽으로가야한다
    left = mid;
    // mid = Math.floor((mid + right) / 2);
  }
  prevMid = mid;
}
