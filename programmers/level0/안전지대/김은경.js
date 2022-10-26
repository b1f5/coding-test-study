function solution(board) {
  const arr = Array.from(Array(board.length), () =>
    Array(board.length).fill(0)
  );
  const row = board.length;
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < row; y++) {
      if (board[x][y] === 1) {
        for (let i = x - 1; i <= x + 1; i++) {
          for (let j = y - 1; j <= y + 1; j++) {
            if (i === -1 || j === -1 || i === row || j === row) continue;
            arr[i][j] = '*';
          }
        }
      }
    }
  }
  let answer = 0;
  for (let i of arr) {
    for (let j of i) {
      if (j === 0) answer += 1;
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1],
  ])
);
