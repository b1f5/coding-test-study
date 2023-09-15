function solution(n) {
  const answer = [];

  move(n, 1, 2, 3);

  function move(n, 출발, 경유, 도착) {
    if (n === 1) return answer.push([출발, 도착]);

    move(n - 1, 출발, 도착, 경유);
    answer.push([출발, 도착]);
    move(n - 1, 경유, 출발, 도착);
  }

  return answer;
}
