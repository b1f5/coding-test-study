/**
 *
 * @param {string[]} id_list 이용자의 ID가 담긴 문자열 배열
 * @param {string[]} report 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
 * @param {number} k 정지 기준 횟수
 * @returns 각 유저별로 처리 결과 메일을 받은 횟수를 배열
 */
function solution(id_list, report, k) {
  const details = {}; // report로 얻은 이용자의 신고 결과내역
  const counts = {}; // 신고 당한 횟수
  id_list.forEach((id) => (details[id] = new Set()));

  report.forEach((users) => {
    const [from, to] = users.split(' ');
    if (!details[from].has(to)) {
      counts[to] = ++counts[to] || 1;
      details[from].add(to);
    }
  });

  return Object.entries(details) //
    .map(
      ([_, suspects]) =>
        [...suspects].filter((user) => counts[user] >= k).length
    );
}

/* 
신고 결과 내역(details)은 객체로 키는 id_list 요소를 이용한다.
중복 신고는 자유지만, 1회만 인정하기에 값에 Set 구조를 이용한다.
report 배열을 돌면서 신고 내역을 채우는 것과 함께 각 유저의 신고 당한 횟수도 카운팅한다.

반환할 처리 결과 목록 또한 id_list 순이기에 그것을 이용해 만든 신고결과 내역을 이용해 맵핑한다.
필요한 것은 Set 구조에 k 이상 신고 당한 자가 몇 명 포함 되있는지 여부다.
*/
