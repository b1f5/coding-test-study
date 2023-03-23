const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 5로 나누는건 얼추 맞는데, 6의 경우 5로나누면 1이 남아서 실패
// 24 5+19 10+14 (15+9) 20+4
// 29 5+24 10+19 15+14 (20+9) 25+4

// 1. 5로 최대한 나누고 3으로 나눈다 => 24에서 틀림
// 2. 그러면 타겟이 5의 배수가 아니라는 가정하에 3을 순차적으로 빼주면서, 남은 나머지가 5의 배수라면? 5로나눈다

let todo = +input[0];

// const five = Math.floor(todo / 5);
// todo = todo % 5;
// const three = Math.floor(todo / 3);
// todo = todo % 3;
// console.log(todo === 0 ? five + three : -1);

let three = 0;
let five = 0;
while (true) {
  if (todo % 5 !== 0) {
    todo -= 3;
    three++;
  }
  if (todo % 5 === 0 && todo !== 0) {
    five = todo / 5;
    todo = 0;
  }
  if (todo <= 0) break;
}

console.log(todo === 0 ? three + five : -1);
