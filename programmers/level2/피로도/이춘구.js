// @ts-check
/**
 * 유저가 탐색 가능한 모든 던전의 경로를 구해서 완전탐색하는 풀이
 * @param {number} fatigue 유저의 현재 피로도
 * @param {number[][]} dungeons 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열
 * @returns {number} 유저가 탐험할수 있는 최대 던전 수
 */
function solution(fatigue, dungeons) {
  // 던전을 탐색하는 모든 경로 구하기
  const paths = makePaths(dungeons);
  const dungeonsCount = dungeons.length;
  const clearCounts = [];

  // 모든 경로를 하나씩 탐색하기
  for (const path of paths) {
    // 해당 경로대로 던전을 탐험했을 때 클리어할 수 있는 던전의 수 구하기
    const clearCount = clearDungeons(path, fatigue);
    // 던전 클리어 횟수 배열에 넣기
    clearCounts.push(clearCount);
    // 모든 던전을 클리어했다면 경로 탐색 종료
    if (clearCount === dungeonsCount) break;
  }

  return Math.max(...clearCounts);
}

/**
 * 하나의 경로대로 던전들을 탐험했을 때 클리어 할 수 있는 던전의 수를 구하는 함수
 * @param {number[][]} path 던전 탐험 경로
 * @param {number} fatigue 피로도
 * @returns {number} 클리어 할 수 있는 던전의 수
 */
function clearDungeons(path, fatigue) {
  let clearCount = 0;

  path.forEach((dungeon) => {
    const [requiredFatigue, consumingFatigue] = dungeon;

    if (fatigue >= requiredFatigue) {
      fatigue -= consumingFatigue;
      clearCount += 1;
    }
  });

  return clearCount;
}

/**
 * 던전을 탐험하는 모든 경우의 경로를 구하는 함수
 * @param {number[][]} dungeons 던전이 담긴 배열
 * @returns {number[][][]}
 */
function makePaths(dungeons) {
  const paths = [];
  if (dungeons.length === 1) return dungeons.map((el) => [el]);

  dungeons.forEach((fixed, index, origin) => {
    const restDungeons = [
      ...origin.slice(0, index),
      ...origin.slice(index + 1),
    ];
    const restPaths = makePaths(restDungeons);
    const attached = restPaths.map((path) => [fixed, ...path]);
    paths.push(...attached);
  });

  return paths;
}

/**
 * DFS를 이용한 풀이
 * @param {number} fatigue 유저의 현재 피로도
 * @param {number[][]} dungeons 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열
 * @returns {number} 유저가 탐험할수 있는 최대 던전 수
 */
function solution(fatigue, dungeons) {
  const dungeonsCount = dungeons.length;
  // 던전의 탐색 여부를 담아둘 배열을 만들고 전부 false로 초기화한다.
  const cleared = new Array(dungeonsCount).fill(false);
  let clearCount = 0;

  dfs(fatigue, 0);

  /**
   * @param {number} fatigue 유저의 현재 피로도
   * @param {number} currentClearCount 현재
   */
  function dfs(fatigue, currentClearCount) {
    // 현재까지 클리어한 던전 수와 이전까지 클리어한 던전 수 중 큰 값으로 최신화한다.
    clearCount = Math.max(currentClearCount, clearCount);

    // 모든 던전을 클리어했다면 바로 함수를 종료한다.
    if (clearCount === dungeonsCount) return;

    // 모든 던전을 탐험하는데
    for (let i = 0; i < dungeonsCount; i += 1) {
      const [requiredFatigue, consumingFatigue] = dungeons[i];
      const isClearedDungeon = cleared[i];

      // 아직 클리어하지 않았다면 던전이 요구하는 피로도가 현재 피로도보다 작다면
      if (!isClearedDungeon && requiredFatigue <= fatigue) {
        // 클리어하고
        cleared[i] = true;
        // 다른 던전들을 탐색한다.
        dfs(fatigue - consumingFatigue, currentClearCount + 1);
        // 모든 던전을 탐색한 다음,
        // 다음 경로로 탐색하기 위해 클리어 여부를 false로 돌려놓는다.
        cleared[i] = false;
      }
    }
  }

  return clearCount;
}
