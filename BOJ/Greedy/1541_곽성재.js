const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const [input] = fs.readFileSync(filePath).toString().trim().split("\n");

// 덧셈 뺄셈이 섞인 식에서 최소가 되려면???
// 뺄셈을 기준으로 뒤에는 더하기를 최대화 한다
// 10 + 20 + 30 - (40 + 50)
// 10 + 20 - 30 - (40 + 50) - 60

const arr = input.split("-");
// console.log(arr);

let answer = 0;

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];
  if (i === 0) {
    // prettier-ignore
    answer = answer + el.split('+').map(el => +el).reduce((acc, cur) => acc + cur, 0);
  }
  if (i > 0) {
    // prettier-ignore
    answer = answer - el.split('+').map(el => +el).reduce((acc, cur) => acc + cur, 0);
  }
}

console.log(answer);
