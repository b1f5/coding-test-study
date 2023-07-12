const fs = require('fs');

const filePath = './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const length = input.shift();

function solution(timetables) {
  timetables.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });
  let current = timetables.shift();
  let result = 1;

  for (const timetable of timetables) {
    if (timetable[0] >= current[1]) {
      current = timetable;
      result += 1;
    }
  }

  console.log(result);
}

if (length === '0') console.log(0);
else {
  solution(input.map((el) => el.split(' ').map((el2) => Number(el2))));
}
