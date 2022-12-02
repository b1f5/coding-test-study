function solution(clothes) {
  const board = {};
  clothes.forEach((el) => {
    board[el[1]] ? board[el[1]].push(el[0]) : (board[el[1]] = [el[0]]);
  });
  const temp = [];
  for (const [key, value] of Object.entries(board)) {
    temp.push(value.length);
  }
  let answer = temp.reduce((acc, cur) => acc * (cur + 1), 1);

  return answer - 1;
}
