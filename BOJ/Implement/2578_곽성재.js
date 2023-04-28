const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const board = input.splice(0, 5).map((_) => _.split(" ").map(Number));
// console.table(board);
const calls = input.join(" ").split(" ").map(Number);

let bingos = [];
const temp3 = [];
const temp4 = [];

for (let i = 0; i < 5; i++) {
  const temp1 = [];
  const temp2 = [];
  temp3.push(board[i][i]);
  temp4.push(board[4 - i][i]);
  for (let j = 0; j < 5; j++) {
    temp1.push(board[i][j]);
    temp2.push(board[j][i]);
  }
  bingos.push(temp1, temp2);
}
bingos.push(temp3);
bingos.push(temp4);

for (let i = 0; i < calls.length; i++) {
  if (bingos.filter((el) => el.length === 0).length >= 3) {
    console.log(i);
    return;
  }
  const num = calls[i];

  bingos = bingos.map((arr) => {
    if (arr.indexOf(num) > -1) {
      arr.splice(arr.indexOf(num), 1);
    }
    return arr;
  });
}

// let answer = [];
// calls.forEach((num, i) => {
//   if (bingos.filter((el) => el.length === 0).length === 3) {
//     answer.push(i);
//     return;
//   }
//   bingos = bingos.map((arr) => {
//     if (arr.indexOf(num) > -1) {
//       arr.splice(arr.indexOf(num), 1);
//     }
//     return arr;
//   });
// });

// console.log(answer[0]);
