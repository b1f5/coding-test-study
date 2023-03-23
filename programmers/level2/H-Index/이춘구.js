// @ts-check
/**
 * @param {number[]} citations 논문의 인용 횟수를 담은 배열
 * @returns {number} H-Index
 */
function solution(citations) {
  // 오름차순으로 정렬한다.
  const sortedCitations = citations.sort((a, b) => b - a);
  // 인용 횟수 중 최댓값을 구한다.
  const maxCitedCount = sortedCitations[0];
  // H-Index의 최솟값은 0이므로 answer를 0으로 초기화한다.
  let answer = 0;

  // H-Index의 범위는 0 <= H-Index <= 인용 횟수 중 최댓값이므로 최댓값으로부터 하나씩 줄여나가며 찾는다.
  for (
    let currentHIndex = maxCitedCount;
    currentHIndex >= 0;
    currentHIndex -= 1
  ) {
    // 현재 H-Index보다 큰 인용 횟수의 개수를 담을 변수
    let overCitedCount = 0;
    // 인용 횟수를 하나씩 순회한다.
    for (let i = 0; i < sortedCitations.length; i += 1) {
      // 현재 인용 횟수가 H-Index보다 크다면 1을 더한다.
      if (sortedCitations[i] >= currentHIndex) overCitedCount += 1;
      // 아니라면 이후의 인용 횟수는 전부 현재 H-Index보다 작으니
      // 순회를 일찍이 종료한다.
      else break;
    }

    // 현재 H-Index보다 큰 인용 횟수의 개수가 현재 H-Index 이상이라면
    // answer에 H-Index를 할당하고 종료한다.
    if (overCitedCount >= currentHIndex) {
      answer = currentHIndex;
      break;
    }
  }

  // H-Index를 반환한다.
  return answer;
}
