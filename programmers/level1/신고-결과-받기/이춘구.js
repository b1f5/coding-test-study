/**
 * @param {string[]} id_list 이용자의 ID가 담긴 문자열 배열
 * @param {string[]} report 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열
 * @param {number} k 정지 기준이 되는 신고 횟수
 * @returns {number[]} 각 이용자가 받게 될 메일 수
 */
function solution(id_list, report, k) {
  // 신고 내용에서 중복을 제거한다.
  const uniqueReports = Array.from(new Set(report));

  // 피신고인을 key로 신고인 목록을 value로 갖는 객체를 만든다.
  const reportedIdStatus = uniqueReports.reduce((obj, report) => {
    const [reporter, reported] = report.split(" ");
    obj[reported] = obj[reported] ? [...obj[reported], reporter] : [reporter];

    return obj;
  }, {});

  // 위의 객체에서 신고인의 수가 k 이상이어서 정지된 피신고인들을 담은 배열을 만든다.
  const suspendedIds = Object.entries(reportedIdStatus).reduce(
    (arr, status) => {
      const [id, reporters] = status;
      if (reporters.length >= k) arr.push(id);

      return arr;
    },
    []
  );

  // 신고인이 받을 수 있는 메일 수를 기록한 객체를 만든다.
  const mailCountStatus = id_list.reduce(
    (obj, id) => ({ ...obj, [id]: 0 }),
    {}
  );

  // 정지된 아이디들을 순회하면서 정지된 아이디를 신고한 신고인의 메일 수에 1을 더한다.
  for (const suspendedId of suspendedIds) {
    reportedIdStatus[suspendedId].forEach(
      (reporter) => (mailCountStatus[reporter] += 1)
    );
  }

  // 수신 예정 메일 수를 기록한 객체에서 값만 뽑은 배열을 반환한다.
  return Object.values(mailCountStatus);
}
