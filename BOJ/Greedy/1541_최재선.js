const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution(args) {
  let result = args[0];

  for (let i = 1; i < args.length; i += 1) {
    result -= args[i];
  }

  console.log(result);
}

solution(input[0].split('-').map((el) => el.split('+').map((el2) => Number(el2)).reduce((acc, cur) => acc + cur, 0)));
