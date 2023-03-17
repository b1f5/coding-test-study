const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, ...words] = input;

// console.log(words);

const BOARD = {};

words.forEach((word, i, arr) => {
  const l = word.length;
  for (let i = 0; i < word.length; i++) {
    // prettier-ignore
    BOARD[word[i]] = BOARD[word[i]]=== undefined ? 10 ** (l - i - 1) : BOARD[word[i]]+ 10 ** (l - i - 1);
  }
});
// console.log(BOARD);

// console.log(Object.keys(BOARD));

const arr = [];

for (const key in BOARD) {
  // console.log(BOARD[key]);
  arr.push(BOARD[key]);
}

let answer = 0;
arr.sort((a, b) => a - b);
// console.log(arr);
let start = 9;
for (let i = arr.length - 1; i > -1; i--) {
  answer += arr[i] * start;
  // console.log(arr[i] * start);
  start--;
}

console.log(answer);
