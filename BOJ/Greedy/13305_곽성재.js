const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const countOfCities = input[0];
const dists = input[1].split(" ").map((el) => BigInt(el));
const costs = input[2]
  .split(" ")
  .map((el) => BigInt(el))
  .splice(0, dists.length);

let answer = BigInt(0);

let curPrice = costs[0];

for (let i = 0; i < dists.length; i++) {
  answer += curPrice * dists[i];
  if (curPrice > costs[i + 1]) curPrice = costs[i + 1];
}

console.log(answer.toString()); // Number로 감싸니까 틀린다...

// const MIN_COST = Math.min(...costs); // 빅인트쓰려는순간 막힌다
// let breakpoint = -1;

// for (let i = 0; i < dists.length; i++) {
//   const dist = dists[i];
//   const cost = costs[i];
//   answer += cost * dist;
//   if (cost === MIN_COST) {
//     breakpoint = i;
//     break;
//   }
// }
// if (breakpoint > -1) {
//   const cost = costs[breakpoint];
//   for (let i = breakpoint + 1; i < dists.length; i++) {
//     const dist = dists[i];
//     answer += cost * dist;
//   }
// }

// console.log(answer);

// 범위 고려안하고 Number로 변환해서 푼다 => 1번태스크만 정답
// 빅인트 써서 풀었는데 넘버로 래핑해서 출력한다 => 2번까지 정답
// 투스트링만 쓴다 => 100점
