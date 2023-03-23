// 최단 거리 -> Queue(BFS)
// 최단 경로 접근방식 -> 총 경로의 부분 경로 또한 최단 거리이다.
function solution(maps) {
  const R = maps.length;
  const C = maps[0].length;

  const from = [0, 0, 1];
  const Q = [from];

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (Q.length) {
    let [row, col, minDistance] = Q.shift();

    if (row === R - 1 && col === C - 1) return minDistance;

    for (const [dy, dx] of directions) {
      const [nextR, nextC] = [row + dy, col + dx];
      if (!isValid(nextR, nextC)) continue;
      if (maps[nextR][nextC] === 0) continue; // 연산자를 이용한 한줄 작성은 더 많은 경우를 체크하게 한다.

      maps[nextR][nextC] = 0; // visited
      Q.push([nextR, nextC, minDistance + 1]);
    }
  }
  return -1;

  function isValid(row, col) {
    return 0 <= row && row < R && 0 <= col && col < C;
  }
}
