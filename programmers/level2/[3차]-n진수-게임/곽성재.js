/**
 * n: 진법
 * t: 미리 구할 숫자의 갯수
 * m: 게임에 참가하는 인원
 * p: 유저의 순서
 */
function solution(n, t, m, p) {
  var answer = "";

  // 플레이어의 말하는 순서를 담은 배열
  const orders = [];
  for (let i = 0; i < t; i += 1) {
    orders.push(p + i * m);
  }
  const lastOrder = orders.at(-1);

  let board = "0";
  let num = 1;
  while (board.length < lastOrder) {
    board += convert(num, n);
    num += 1;
  }
  for (let i = 0; i < orders.length; i += 1) {
    const idx = orders[i] - 1;
    answer += board[idx];
  }
  return answer;
}

function convert(targetNum, N) {
  const result = [];
  while (targetNum > 0) {
    if (targetNum % N < 10) {
      result.push(targetNum % N);
    } else {
      result.push(String.fromCharCode(65 + ((targetNum % N) - 10)));
    }
    targetNum = Math.floor(targetNum / N);
  }
  return result.reverse().join("");
}
