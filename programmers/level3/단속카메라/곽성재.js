/**
 *
 * @param {number[]} routes
 * @returns
 */
function solution(routes) {
  var answer = 1;
  // 진출시점을 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);
  let camera = routes[0][1];
  // 첫번째의 진출시점을 배열에 푸쉬 or 숫자변수에 그 값을 넣고 answer++
  // 이제 순회하면서, 다음 요소의 진입 시점이 푸쉬된 값보다 작으면 진출시점의 값을 푸쉬하지 않음
  for (let i = 1; i < routes.length; i++) {
    const curEnter = routes[i][0];
    const curExit = routes[i][1];
    if (camera >= curEnter) {
      continue;
    }
    camera = curExit;
    answer++;
  }
  return answer;
}
