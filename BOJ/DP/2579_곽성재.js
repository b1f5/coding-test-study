const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [length, ...stair] = input.map((el) => +el);
stair.unshift(0);

let answer = 0;

let arr = Array.from({ length: length + 1 }, () => 0);

// n번째 계단으로 오려면 n-1이나 n-2번째 계단에서 올 수 밖에 없다
// n-1에서 오려면 세개 연달아 밟으면 안되니까 n-3번째 계단을 밟고 n-1번째를 밟아야한다
function solution(stair) {
  if (stair.length < 4) return stair.reduce((acc, cur) => acc + cur, 0);
  arr[1] = stair[1];
  arr[2] = stair[1] + stair[2];
  arr[3] = Math.max(stair[1] + stair[3], stair[2] + stair[3]);
  for (let i = 4; i < arr.length; i++) {
    // prettier-ignore
    arr[i] = Math.max(arr[i - 2] + stair[i], arr[i - 3] + stair[i - 1] + stair[i]);
  }
  return arr[arr.length - 1];
}

// console.log(stair);
// console.log(arr);
// console.log(arr[arr.length - 1]);

console.log(solution(stair));
