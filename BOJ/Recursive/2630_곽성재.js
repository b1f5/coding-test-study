const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const paper = input.slice(1).map((str) => str.split(" ").map(Number));

// 색종이의 모든 부분이 동일 색상인지 판별하는 함수
function verify(arr) {
  const length = arr.length;
  const el = arr[0][0];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const target = arr[i][j];
      if (el !== target) return false;
    }
  }
  return el ? "blue" : "white"; // 1 : blue, 0 : white
}

// 색종이 배열을 받아 네 구간으로 자른 배열들을 리턴하는 함수
function cutArray(arr) {
  const leng = arr.length;
  const first = Array.from({ length: leng / 2 }, () => new Array(leng / 2));
  const second = Array.from({ length: leng / 2 }, () => new Array(leng / 2));
  const third = Array.from({ length: leng / 2 }, () => new Array(leng / 2));
  const fourth = Array.from({ length: leng / 2 }, () => new Array(leng / 2));

  for (let i = 0; i < leng; i++) {
    for (let j = 0; j < leng; j++) {
      if (0 <= i && i < leng / 2 && 0 <= j && j < leng / 2) {
        first[i][j] = arr[i][j];
      } else if (0 <= i && i < leng / 2 && leng / 2 <= j) {
        second[i][j - leng / 2] = arr[i][j];
      } else if (leng / 2 <= i && 0 <= j && j < leng / 2) {
        third[i - leng / 2][j] = arr[i][j];
      } else {
        fourth[i - leng / 2][j - leng / 2] = arr[i][j];
      }
    }
  }

  return [first, second, third, fourth];
}

let white = 0;
let blue = 0;

// 색종이 배열이 인자로 들어오면, 판별하고 조건을 충족하지 못하면 재귀로 불려지는 함수
function solution(arr) {
  if (verify(arr) === "blue") {
    blue += 1;
  } else if (verify(arr) === "white") {
    white += 1;
  } else {
    const divided = cutArray(arr);
    divided.forEach((temp) => solution(temp));
  }
}

solution(paper);

console.log(white + "\n" + blue);
