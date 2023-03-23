// @ts-check
/**
 * @param {number[][]} maps 게임 맵의 상태
 * @returns {number} 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값
 */
function solution(maps) {
  // 사방의 좌표(상, 우, 하, 좌 순)
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const DIRECTIONS_LENGTH = DIRECTIONS.length;

  // 맵의 가로 길이와 세로 길이
  const COLUMN_LENGTH = maps[0].length;
  const ROW_LENGTH = maps.length;
  // 목표 지점의 좌표
  const DESTINATION = [ROW_LENGTH - 1, COLUMN_LENGTH - 1];

  // 방문한 곳을 표시하기 위해 기존 maps를 할당하고 시작 지점을 방문한 것으로 표시
  const visited = maps;
  visited[0][0] = 0;

  // 방문할 곳을 넣을 큐를 만들고 [시작 좌표, 현재 거리]를 초기값으로 넣는다.
  const queue = new Queue();
  queue.enqueue([0, 0, 1]);

  // 큐에 더이상 값이 없을 때까지(방문할 곳이 없을 때까지) 반복한다.
  while (queue.length() > 0) {
    // 큐에서 현재 좌표와 거리, 목표 지점의 좌표를 뽑는다.
    const [currRow, currColumn, distance] = queue.dequeue();
    const [destRow, destColumn] = DESTINATION;

    // 목표지점에 도달했다면 현재 거리를 반환한다.
    const atDestination = currRow === destRow && currColumn === destColumn;
    if (atDestination) return distance;

    // 목표지점이 아니라면 사방을 탐색한다.
    for (let i = 0; i < DIRECTIONS_LENGTH; i += 1) {
      // 탐색 위치의 좌표를 구한다.
      const [dirRow, dirColumn] = DIRECTIONS[i];
      const [newRow, newColumn] = [currRow + dirRow, currColumn + dirColumn];

      // 탐색 위치가 맵의 범위를 넘어섰다면 다음 지역으로 넘어간다.
      if (
        newRow < 0 ||
        newRow >= ROW_LENGTH ||
        newColumn < 0 ||
        newColumn >= COLUMN_LENGTH
      )
        continue;

      // 탐색 위치가 이동 불가 지역이거나 이미 방문한 곳이라면 다음 지역으로 넘어간다.
      if (visited[newRow][newColumn] === 0) continue;

      // 이동 가능 지역이거나 방문한 적이 없는 곳이라면 방문 표시를 한다.
      visited[newRow][newColumn] = 0;
      // 큐에 해당 지역의 좌표와 1을 더한 거리를 넣는다.
      queue.enqueue([newRow, newColumn, distance + 1]);
    }
  }

  // 큐의 길이가 0이 될 때까지 반복했는데 목표지점에 도달하지 못했다면 -1을 반환한다.
  return -1;
}

class Queue {
  // 값을 저장할 객체
  #storage = {};
  // 맨 앞 값과 맨 뒤 요소를 가리킬 포인터들
  #front = 0;
  #rear = 0;

  enqueue(value) {
    // 큐의 길이가 0이라면 0의 위치에 값을 넣는다
    if (this.length() === 0) this.#storage[0] = value;
    else {
      // 아니라면 rear 포인터를 1 증가시키고 해당 위치에 값을 넣는다.
      this.#rear += 1;
      this.#storage[this.#rear] = value;
    }
  }

  dequeue() {
    // front가 가리키는 데이터를 dequeueTarget에 할당한 뒤 삭제한다.
    const dequeueTarget = this.#storage[this.#front];
    delete this.#storage[this.#front];

    // front와 rear가 같다면 데이터가 하나 있다는 뜻이므로
    if (this.#front === this.#rear) {
      // front와 rear를 0으로 초기화한다.
      this.#front = 0;
      this.#rear = 0;
    } // front와 rear가 다르다면 front가 가리키는 데이터를 front를 1 증가시킨다.
    else this.#front += 1;

    return dequeueTarget;
  }

  length() {
    // rear가 가리키는 데이터가 존재하지 않는다면 데이터가 없다는 뜻이므로 0 반환하고
    if (this.#storage[this.#rear] === undefined) return 0;
    // 아니면 rear - front + 1로 길이 구해서 반환한다.
    else return this.#rear - this.#front + 1;
  }
}
