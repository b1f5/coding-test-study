/* eslint-disable no-param-reassign */
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution(N) {
  let result = 0;

  const putQueenAtRow = (cache) => {
    const { length } = cache;

    if (length === N) {
      result += 1;
      return;
    }

    const col = length;

    for (let i = 0; i < N; i += 1) {
      let isValid = true;

      for (let j = 0; j < length; j += 1) {
        if (Math.abs(col - j) === Math.abs(i - cache[j]) || cache[j] === i) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        cache.push(i);
        putQueenAtRow(cache);
        cache.pop();
      }
    }
  };

  putQueenAtRow([]);

  console.log('result: ', result);
}

solution(Number(input[0]));
