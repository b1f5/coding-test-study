/* eslint-disable no-continue */
/* eslint-disable no-bitwise */
/* eslint-disable max-len */
const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const types = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];

const typeMap = new Map();

function setTypeMap() {
  for (let i = 0; i < types.length; i += 1) {
    const type = types[i];
    let value = 0;

    for (const str of type) {
      if (str === 'I') value += 1 << 3;
      else if (str === 'S') value += 1 << 2;
      else if (str === 'T') value += 1 << 1;
      else if (str === 'J') value += 1;
    }

    typeMap.set(types[i], value);
  }
}

function convertBitToNum(bit) {
  return bit.toString(2).split('').filter((el) => el === '1').length;
}

function solution(args) {
  const result = [];

  for (let i = 1; i < args.length; i += 2) {
    const converted = args[i].split(' ').map((el) => typeMap.get(el));

    if (converted.length > 16 * 3) {
      result.push(0);
      continue;
    }

    let sum = Infinity;

    for (let j = 0; j < converted.length; j += 1) {
      for (let k = j + 1; k < converted.length; k += 1) {
        for (let l = k + 1; l < converted.length; l += 1) {
          const newSum = convertBitToNum(converted[j] ^ converted[k]) + convertBitToNum(converted[k] ^ converted[l]) + convertBitToNum(converted[l] ^ converted[j]);

          sum = Math.min(sum, newSum);
        }
      }
    }

    result.push(sum);
  }

  console.log(result.join('\n'));
}

setTypeMap();
solution(input.slice(1));
