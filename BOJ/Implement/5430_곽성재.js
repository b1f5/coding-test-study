const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

const answer = [];

for (let i = 3; i <= N * 3; i += 3) {
  const comm = input[i - 2];
  const len = +input[i - 1];

  let isReverse = false;
  let isError = false;
  let start = 0;
  let end = len - 1;

  let arr = input[i].slice(1, input[i].length - 1).split(",");
  // let arr = JSON.parse(input[i]);

  for (let j = 0; j < comm.length; j++) {
    const c = comm[j];
    if (c === "R") {
      isReverse = !isReverse;
    }
    if (c === "D") {
      if (start > end) {
        isError = true;
        break;
      }
      if (isReverse) {
        end--;
      }
      if (!isReverse) {
        start++;
      }
    }
  }

  if (isError) {
    answer.push("error");
  } else {
    const temp = arr.slice(start, end + 1);
    if (isReverse) {
      answer.push("[" + temp.reverse().join(",") + "]");
    }
    if (!isReverse) {
      answer.push("[" + temp.join(",") + "]");
    }
  }
}

console.log(answer.join("\n"));
