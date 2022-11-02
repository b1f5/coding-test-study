function solution(id_list, report, k) {
  // 한 유저가 같은 유저를 여러번 신고한 경우(중복신고) 제거
  const countedReports = [...new Set(report)];

  // 신고당한사람을 key로, 신고 한 사람을 value로 객체 생성
  const countReports = countedReports.reduce((obj, report) => {
    const [reporter, reportedPerson] = report.split(' ');
    obj[reportedPerson] = obj[reportedPerson]
      ? [...obj[reportedPerson], reporter]
      : [reporter];
    return obj;
  }, {});

  // 정지 대상 유저를 선정
  const blockedUsers = getBlockedUsers(countedReports, k);

  // 메일 카운트용 객체
  const mailTo = id_list.reduce((acc, value) => {
    return { ...acc, [value]: 0 };
  }, {});

  // countReports 객체에서 정지대상유저의 value를 순회하여 신고자 카운트
  for (const blockedUser of blockedUsers) {
    countReports[blockedUser].forEach((reporter) => {
      mailTo[reporter] += 1;
    });
  }
  return Object.values(mailTo);
}

function getBlockedUsers(report, k) {
  const cnt = {};
  report.forEach((el) => {
    let reportedPerson = el.split(' ')[1];
    cnt[reportedPerson] = (cnt[reportedPerson] || 0) + 1;
  });
  const blockedUsers = [];
  Object.entries(cnt).forEach((v) => {
    const [reportedPerson, reportedCount] = v;
    if (reportedCount >= k) blockedUsers.push(reportedPerson);
  });
  return blockedUsers;
}

// // expect result = [2,1,1,0]
console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

// // expect result = [0,0]
console.log(
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
);
