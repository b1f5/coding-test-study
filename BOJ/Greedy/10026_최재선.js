/* eslint-disable no-param-reassign */
const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// R, G
// B
function solution(args) {
  const [stringLen, ...map] = args;
  const length = Number(stringLen);
  const normalVisited = new Array(length).fill().map((_) => new Array(length).fill(false));

  const abnormalVisited = new Array(length).fill().map((_) => new Array(length).fill(false));

  const result = [0, 0];

  const search = (i, j, targetAlphabet, type) => {
    const mapAlphabet = map[i][j];

    if (type === 'normal' && !normalVisited[i][j]) {
      let isNormalValid = true;

      if (targetAlphabet) {
        if (targetAlphabet !== mapAlphabet) isNormalValid = false;
      } else {
        targetAlphabet = mapAlphabet;
        result[0] += 1;
      }

      if (isNormalValid) {
        normalVisited[i][j] = true;

        if (normalVisited[i + 1] !== undefined) search(i + 1, j, targetAlphabet, 'normal');
        if (normalVisited[i - 1] !== undefined) search(i - 1, j, targetAlphabet, 'normal');
        if (normalVisited[i][j + 1] !== undefined) search(i, j + 1, targetAlphabet, 'normal');
        if (normalVisited[i][j - 1] !== undefined) search(i, j - 1, targetAlphabet, 'normal');
      }
    }

    if (type === 'abnormal' && !abnormalVisited[i][j]) {
      let isAbnormalValid = true;

      if (targetAlphabet) {
        if (targetAlphabet === 'B') {
          if (targetAlphabet !== mapAlphabet) {
            isAbnormalValid = false;
          }
        } else if (!['R', 'G'].includes(mapAlphabet)) {
          isAbnormalValid = false;
        }
      } else {
        targetAlphabet = mapAlphabet;
        result[1] += 1;
      }

      if (isAbnormalValid) {
        abnormalVisited[i][j] = true;

        if (abnormalVisited[i + 1] !== undefined) search(i + 1, j, targetAlphabet, 'abnormal');
        if (abnormalVisited[i - 1] !== undefined) search(i - 1, j, targetAlphabet, 'abnormal');
        if (abnormalVisited[i][j + 1] !== undefined) search(i, j + 1, targetAlphabet, 'abnormal');
        if (abnormalVisited[i][j - 1] !== undefined) search(i, j - 1, targetAlphabet, 'abnormal');
      }
    }
  };

  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length; j += 1) {
      search(i, j, null, 'normal');
      search(i, j, null, 'abnormal');
    }
  }

  console.log(result.join(' '));
}

solution(input);
