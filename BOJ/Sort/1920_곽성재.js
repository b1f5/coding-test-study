const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// prettier-ignore
let [N, candidates, M, targets] = input.map((v) => v.split(" ").map((x) => Number(x)));

// 이분 탐색을 하려면, 정렬된 배열이 필요하다
candidates.sort((a, b) => a - b);

// 이분 탐색
const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      return 1;
    }
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
};

// prettier-ignore
const result = targets.map((v) => binarySearch(candidates, v, 0, candidates.length - 1));

console.log(result.join("\n"));
