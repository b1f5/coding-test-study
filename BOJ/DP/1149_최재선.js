const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const length = Number(input[0]);
const map = input.slice(1).map((el) => el.split(' ').map(Number));

for (let i = 1; i < length; i += 1) {
  const curRow = map[i];
  const beforeRow = map[i - 1];

  curRow[0] += Math.min(beforeRow[1], beforeRow[2]);
  curRow[1] += Math.min(beforeRow[0], beforeRow[2]);
  curRow[2] += Math.min(beforeRow[0], beforeRow[1]);
}

console.log(Math.min(...map[length - 1]));
