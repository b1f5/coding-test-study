const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];

function solution(arg) {
  let stack = [arg.shift()];
  const destination = arg[0];
  const memo = new Set();
  let result = 0;

  while (stack.length) {
    let isBreak = false;
    const newStack = [];
    for (const el of stack) {
      if (el === destination) {
        isBreak = true;
        break;
      }

      if (!memo.has(el)) {
        memo.add(el);

        if (el > 1) {
          newStack.push(el - 1);
        }

        if (el < destination) {
          newStack.push(el + 1);
          newStack.push(el * 2);
        }
      }

      stack = newStack;
    }

    if (isBreak) break;
    result += 1;
  }

  console.log(result);
}

solution(input.split(' ').map((el) => Number(el)));