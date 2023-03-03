function solution(n, wires) {
  let answer = n;
  let cnt = 0;
  let graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));
  let visited = Array.from({ length: n + 1 }, () => false);

  const DFS = (tower) => {
    cnt += 1;
    // 방문처리
    visited[tower] = true;

    for(let i=1; i<=n; i+=1) {
      // 간선이 존재하고 방문하지 않았다면,
      if(graph[tower][i] && !visited[i]) {
        DFS(i);
      }
    }
  }

  // 초기 간선 설정
  for(const [tower1, tower2] of wires) {
    graph[tower1][tower2] = true;
    graph[tower2][tower1] = true;
  }

  for(const [tower1, tower2] of wires) {
    // cnt와 visited 초기화
    cnt = 0;
    visited.fill(false);

    // 하나씩 다 끊어주면서 검사
    graph[tower1][tower2] = false;
    graph[tower2][tower1] = false;

    DFS(1);

    // DFS 끝나면 다시 연결
    graph[tower1][tower2] = true;
    graph[tower2][tower1] = true;

    // 기존의 answer와 더 작은 차이를 가지는 값 비교 후 최솟값으로 설정
    // n - cnt = n개의 송전탑에서 이어진 송전탑의 개수를 뺀 값
    // cnt = 이어져있는 송전탑의 개수
    // 따라서 (n - cnt)와 cnt는 각각 둘로 나뉘어진 연결된 송전탑의 개수
    answer = Math.min(Math.abs((n - cnt) - cnt), answer);
  }

  return answer;
}