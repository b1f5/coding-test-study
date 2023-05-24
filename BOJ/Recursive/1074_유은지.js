const [N, r, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const len = 2 ** N;
let count = 0;

const divide = (row, col, n) => {
  if (row === r && col === c) {
    console.log(count);
    return;
  }

  if (row <= r && r < row + n && c < col + n && col <= c) {
    divide(row, col, n / 2);
    divide(row, col + n / 2, n / 2);
    divide(row + n / 2, col, n / 2);
    divide(row + n / 2, col + n / 2, n / 2);
  } else count += n * n;
};

divide(0, 0, len);
