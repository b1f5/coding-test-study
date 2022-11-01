/* 
직접적인 친구는 제외하며, 간접적으로 연결된 친구에 점수를 가산한다.
연결 깊이는 측정 -> 직접적인 친구를 더 많이 아는 사람은 점수가 축적된다. 
그럼 건너건너 아는 사람은?
동점일 경우 이름 오름차순, 최대 5명
*/

/**
 * 인접 리스트와 가중치 그래프
 * @param {string} user 유저네임
 * @param {string[][]} friends 친구 관계를 담은 이차원 배열
 * @param {string[]} visitors 방문자 기록
 * @returns 추천 친구 목록
 */
function problem7(user, friends, visitors) {
  const adjacencyList = getRelationship(friends);
  const mainScore = getConnectionScore(adjacencyList, user);
  const visitScore = countVisits(visitors, adjacencyList[user]);

  for (let visitor in visitScore) {
    mainScore[visitor] =
      mainScore[visitor] + visitScore[visitor] || visitScore[visitor];
  }

  const recommendation = sort(mainScore).map((el) => el[0]);

  return recommendation.length > 5
    ? recommendation.splice(0, 5)
    : recommendation;
}

/**
 *
 * @param {string[][]} arr 친구 관계를 담은 이차원 배열
 * @returns {object} 인접 리스트
 */
function getRelationship(arr) {
  const links = {};
  arr.forEach((relation) => {
    const [a, b] = relation;
    links[a] = links[a]?.add(b) || new Set().add(b);
    links[b] = links[b]?.add(a) || new Set().add(a);
  });
  return links;
}

/**
 *
 * @param {object} adjacencyList
 * @param {string} target
 * @returns {object} 함께 아는 친구 수에 따른 점수를 담은 객체
 */
function getConnectionScore(adjacencyList, target) {
  const SCORE = 10;
  const result = {};

  adjacencyList[target].forEach((user) => {
    const candidates = [...adjacencyList[user]];
    candidates.forEach((candidate) => {
      if (candidate !== target) {
        result[candidate] = result[candidate] + SCORE || SCORE;
      }
    });
  });
  return result;
}

/**
 *
 * @param {string[]} visitors 방문자 기록
 * @param {Set<string>} expected Set 구조로 이루어진 친구 목록
 * @returns 친구가 아닌 방문자의 방문 수
 */
function countVisits(visitors, expected) {
  let result = {};
  const SCORE = 1;
  visitors.forEach((visitor) => {
    if (!expected.has(visitor))
      result[visitor] = result[visitor] + SCORE || SCORE;
  });
  return result;
}

/**
 * 점수 내림차순이지만, 동점일 때는 소문자 오름차순으로 정렬하는 함수
 * @param {object} score 점수 상황
 * @returns {array} 추천 친구와 점수 목록을 가진 이차원 배열
 */
function sort(score) {
  return Object.entries(score).sort((a, b) =>
    a[1] === b[1] && a[0] < b[0] ? -1 : b[1] - a[1]
  );
}

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['donut', 'lemi'],
      ['donut', 'aun'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'sun'],
      ['shakevan', 'aun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);
