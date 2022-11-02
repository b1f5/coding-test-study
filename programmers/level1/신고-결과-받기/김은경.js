function solution(id_list, report, k) {
  const users = id_list.reduce((acc, value) => {
    return { ...acc, [value]: 0 };
  }, {});

  // 한 유저가 같은 유저를 여러번 신고한 경우(중복신고) 제거
  const countedReports = [...new Set(report)];

  // k번 이상 신고당한 사람들의 목록
  const blockedUsers = getBlockedUsers(countedReports, k);

  // 결과메일을 발송 할 대상에게 카운트 +1
  for (let blockedUser of blockedUsers) {
    for (let j = 0; j < countedReports.length; j++) {
      let [reporter, reportedPerson] = countedReports[j].split(' ');
      if (blockedUser === reportedPerson) {
        users[reporter] += 1;
        countedReports.splice(j, 1);
        j--;
      }
    }
  }
  const mailTo = Object.values(users);
  return mailTo;
}

function getBlockedUsers(report, k) {
  const cnt = {};
  report.forEach((el) => {
    let reportedPerson = el.split(' ')[1];
    {
      cnt[reportedPerson] = (cnt[reportedPerson] || 0) + 1;
    }
  });
  const blockedUsers = [];
  Object.entries(cnt).map((v, i) => {
    if (v[1] >= k) blockedUsers.push(v[0]);
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
// console.log(
//   solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
// );
