function solution(k, dungeons) {
  let visited = Array.from({ length: dungeons.length }, () => false);
  let clearedCnt = 0;

  const DFS = (k, currentCnt) => {
    clearedCnt = Math.max(currentCnt, clearedCnt);

    for(let i=0; i<dungeons.length; i+=1) {
      let [minRequiredFatigue, usedFatigue] = dungeons[i];

      // 남은 피로도가 최소 필요 피로도보다 크고 방문하지 않았다면
      if(k >= minRequiredFatigue && !visited[i]) {
        visited[i] = true;
        DFS(k - usedFatigue, currentCnt + 1);
        visited[i] = false;
      }
    }
  }

  DFS(k, 0);

  return clearedCnt;
}

const k = 80;
const dungeons = [[80, 20], [50, 40], [30, 10]];

const result = solution(k, dungeons);
console.log(result);