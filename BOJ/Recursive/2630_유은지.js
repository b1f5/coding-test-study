const [IPNUT_N, ...INPUT_ARR] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const n = Number(IPNUT_N);
const board = INPUT_ARR.map((v) => v.split(' ').map(Number));

const color = [0, 0];

// 전체가 동일한 색인지 확인하기
const isSameColor = (row, col, n) => {
  const firstColor = board[row][col];

  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (firstColor !== board[i][j]) return false;
    }
  }

  return true;
};

const divide = (row, col, n) => {
  // 해당 부분의 전체 색이 동일한지 확인 후 색상 확인
  if (isSameColor(row, col, n)) {
    color[board[row][col]] += 1;
    return;
  }

  // 동일하지 않다면 분할하기
  divide(row, col, n / 2);
  divide(row, col + n / 2, n / 2);
  divide(row + n / 2, col, n / 2);
  divide(row + n / 2, col + n / 2, n / 2);
};

divide(0, 0, n);

console.log(color.join('\n'));
