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
  report
    .map((el) => el.split(' '))
    .forEach((user) => {
      const [from, to] = user;
      if (!details[from].has(to)) {
        counts[to] = ++counts[to] || 1;
        details[from].add(to);
      }
    });

  // 정지된 유저 목록
  const suspened = Object.entries(counts)
    .filter((c) => c[1] >= k)
    .map((c) => c[0]);

  const result = Array.from({ length: id_list.length }, () => 0);
  let i = 0;
  for (let user in details) {
    suspened.forEach((target) => {
      if (details[user].has(target)) result[i] = ++result[i] || 1;
    });
    i++;
  }
  return result;
}
