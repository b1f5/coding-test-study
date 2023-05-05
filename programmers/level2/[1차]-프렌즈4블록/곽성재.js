/**
 *
 * @param {*} m 판의 높이
 * @param {*} n 폭 (너비)
 * @param {*} board 1차원 배열
 * @returns
 */
function solution(m, n, board) {
  board = board.map((row) => Array.from(row));

  // 얘가 정답임
  let deleteCount = 0;

  // 여기서 while 시작
  const deleteIdx = [];
  for (let y = 0; y < m - 2; y++) {
    const row = board[y];
    const nextRow = board[y + 1];
    for (let x = 0; x < n - 2; x++) {
      const el = row[x];
      const down = nextRow[x];
      const right = row[x + 1];
      const downRight = nextRow[x + 1];
      if (el === down && el === right && el === downRight) {
        deleteIdx.push([y, x], [y + 1, x], [y, x + 1], [y + 1, x + 1]);
      }
    }
  }
  deleteIdx.forEach(([y, x]) => {
    const block = board[y][x];
    if (block !== "") {
      board[y][x] = "";
      deleteCount += 1;
    }
  });
  console.log(board);

  for (let k = 0; k < 28; k++) {
    for (let i = 0; i < n; i += 1) {
      for (let j = m - 1; j > 0; j -= 1) {
        if (board[j][i] === "") {
          board[j][i] = board[j - 1][i];
          board[j - 1][i] = "";
        }
      }
    }
  }
  console.log(board);

  return deleteCount;
}
// 탐색하고 인덱스만 넣어야 중복 부분을 해결할 수 있다
// 탐색하고 바로 A - Z 가 아닌 애로 바꾸면 중복부분이 처리안댐

// prettier-ignore
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])) // 14
// prettier-ignore
console.log(solution(6,6,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])) // 15
