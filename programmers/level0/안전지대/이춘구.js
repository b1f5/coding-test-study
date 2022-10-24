/**
 * @param {number[][]} board 지뢰가 매설된 지역의 지도
 * @returns {number} 안전한 지역의 칸 수
 */
function solution(board) {
  // 지도의 가로 길이와 세로 길이를 구한다.
  const width = board[0].length;
  const height = board.length;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // 현재 지역이 1이라면
      if (board[r][c] === 1) {
        // 현재 지역을 포함해 주변 9칸을 돌면서
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            // r, c가 0 이상이고 width와 height를 넘지 않는 지역이고
            if (0 <= r + i && r + i < height && 0 <= c + j && c + j < width) {
              // 해당 지역이 0(falsy)라면 9을 할당한다.
              board[r + i][c + j] ||= 9;
            }
          }
        }
      }
    }
  }

  let answer = 0;
  // 2차원 배열을 순회하면서
  board.forEach((row) => {
    // cell이 0(falsy)라면 answer에 1을 더한다.
    row.forEach((cell) => cell || answer++);
  });

  return answer;
}

/**
 * 지도를 일차원 배열로 만들어서 해결하는 방법
 * @param {number[][]} board 지뢰의 위치가 적힌 지도
 * @returns {number} 안전지대의 수
 */
function solution(board) {
  // 지도의 한 변의 길이를 구한다.
  const sideLength = board.length;
  // 지도를 1차원 배열로 만든다.
  const flattenBoard = board.flat();
  // 지도에서 값이 1인 요소의 인덱스를 골라 배열을 만든다.
  const bombIndexList = flattenBoard.reduce((arr, curr, index) => {
    if (curr === 1) arr.push(index);
    return arr;
  }, []);

  // 전부 다 지뢰인 경우 0을 반환한다.
  if (bombIndexList.length === flattenBoard.length) return 0;

  // 지뢰가 없는 경우 지도의 길이를 반환한다.
  if (bombIndexList.length === 0) return flattenBoard.length;

  // 그 외의 경우 위험지역을 구한다.
  const dangerIndexList = new Set([]);
  // 지뢰의 인덱스를 순회한다.
  for (const bombIndex of bombIndexList) {
    // 지뢰가 어느 테두리에 위치하는지 알아낸다.
    const whichSides = checkWhichSides(bombIndex, sideLength);

    // 한 변의 길이에 -1, 0, 1을 곱하고 지뢰의 인덱스를 더해서 수직 방향의 인덱스를 구하고,
    // 각 수직 방향의 인덱스에 -1, 0, 1을 더해서 수평 방향의 인덱스를 구한다.
    for (let i = -1; i < 2; i++) {
      // 지뢰가 위쪽 테두리에 위치하면 위쪽을 구할 필요가 없으므로 continue로 넘어간다.
      if (whichSides.includes("UP") && i === -1) continue;
      // 지뢰가 아래쪽 테두리에 위치하면 아래쪽을 구할 필요가 없으므로 continue로 넘어간다.
      if (whichSides.includes("DOWN") && i === 1) continue;
      // 위의 두 조건에서 걸러지지 않았다면 수직 방향의 인덱스를 구한다.
      const verticalIndex = bombIndex + sideLength * i;
      for (let j = -1; j < 2; j++) {
        // 지뢰가 왼쪽 테두리에 위치하면 왼쪽을 구할 필요가 없으므로 continue로 넘어간다.
        if (whichSides.includes("LEFT") && j === -1) continue;
        // 지뢰가 오른쪽 테두리에 위치하면 오른쪽을 구할 필요가 없으므로 continue로 넘어간다.
        if (whichSides.includes("RIGHT") && j === 1) continue;
        // 위의 두 조건에서 걸러지지 않았다면 수평 방향의 인덱스를 구해서,
        // 위험지역 목록에 추가한다.
        dangerIndexList.add(verticalIndex + j);
      }
    }
  }

  // 안전지역의 수 = 전체 지역의 수 - 위험지역의 수
  return flattenBoard.length - dangerIndexList.size;
}

/**
 * 해당 지뢰의 인덱스가 어느 쪽 테두리에 위치하는지 알려주는 함수
 * @param {number} index 지뢰의 인덱스
 * @param {number} sideLength 지도의 한 변의 길이
 * @returns {string[]} 지뢰가 위치한 테두리의 배열
 */
function checkWhichSides(index, sideLength) {
  const sideList = [];
  // 지도의 한 변의 길이가 5일 경우,
  // 인덱스(0, 1, 2, 3, 4)가 5보다 작으면 위쪽 테두리에 위치한다는 뜻이다.
  if (index < sideLength) sideList.push("UP");
  // 인덱스(20, 21, 22, 23, 24)가 20 이상이면 아래쪽 테두리에 위치한다는 뜻이다.
  if (index >= sideLength * (sideLength - 1)) sideList.push("DOWN");
  // 인덱스(0, 5, 10, 15)가 5로 나누어 떨어지면 왼쪽 테두리에 위치한다는 뜻이다.
  if (index % sideLength === 0) sideList.push("LEFT");
  // 인덱스(4, 9, 14, 19, 24)에 1을 더한 수가 5로 나누어 떨어지면 오른쪽 테두리에 위치한다는 뜻이다.
  if ((index + 1) % sideLength === 0) sideList.push("RIGHT");

  return sideList;
}
