function solution(id_list, report, k) {
  // prettier-ignore
  let answer = Array.from({ length: id_list.length }).fill(0);
  const reportBoard = makeReportBoard(id_list, report);
  // prettier-ignore
  const suspended = calculateSuspendedUser(id_list, reportBoard, k);
  for (const suspended_user of suspended) {
    for (let j = 0; j < id_list.length; j++) {
      const id = id_list[j];
      if (reportBoard[id].has(suspended_user)) {
        answer[j]++;
      }
    }
  }
  return answer;
}

// {
//   muzi : {neo, frodo} // Set자료형
//   neo : {neo, frodo} // Set자료형
//   frodo : {neo, frodo} // Set자료형
//   con : {neo, frodo} // Set자료형
// }

// key값은 id로, value값은 Set으로 가지는 객체를 만들고 초기화한다
// Set인 이유는 한 유저가 여러번 신고해도 1회로 카운팅되어서
function makeReportBoard(id_list, report) {
  const reportBoard = new Object();
  for (const id of id_list) {
    reportBoard[id] = new Set();
  }
  for (const i of report) {
    const [reporter, reported] = i.split(" ");
    reportBoard[reporter].add(reported);
  }
  return reportBoard;
}

function calculateSuspendedUser(id_list, reportBoard, k) {
  let temp = [];
  for (const id of id_list) {
    temp = [...temp, ...reportBoard[id]];
  }
  const suspended = [];
  for (const id of id_list) {
    if (temp.filter((el) => el === id).length >= k) {
      suspended.push(id);
    }
  }
  return suspended;
}

// prettier-ignore
console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
// prettier-ignore
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
