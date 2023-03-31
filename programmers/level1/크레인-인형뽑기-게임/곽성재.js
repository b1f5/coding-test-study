function solution(board, moves) {
  let answer = 0;
  const N = board.length;
  moves = moves.map((num) => num - 1);

  const basket = [];

  for (let i = 0; i < moves.length; i++) {
    const targetLine = moves[i];
    for (let j = 0; j < N; j++) {
      const target = board[j][targetLine];
      if (target === 0) continue;
      else {
        if (basket[basket.length - 1] === target) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(target);
        }
        board[j][targetLine] = 0;
        break;
      }
    }
  }
  console.log(basket);

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
