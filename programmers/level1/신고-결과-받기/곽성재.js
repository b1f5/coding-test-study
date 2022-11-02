function solution(id_list, report, k) {
  // prettier-ignore
  let answer = Array.from({ length: id_list.length }).fill(0);
  const reportBoard = makeReportBoard(id_list, report);
  // prettier-ignore
  const suspended = calculateSuspendedUser(id_list, reportBoard, k);
  for (const suspended_user of suspended) {
    for (let j = 0; j < id_list.length; j++) {
      const id = id_list[j];
      if (reportBoard[id].includes(suspended_user)) {
        answer[j]++;
      }
    }
  }
  return answer;
}

// {
//   muzi : {neo, frodo} // Set자료형
// }

// {
//   muzi : [neo, frodo] // 배열로 변경
// }

// key값은 id로, value값은 Set으로 가지는 객체를 만들고 초기화한다
// Set인 이유는 한 유저가 여러번 신고해도 1회로 카운팅되어서

// 위의 코드였지만, 아예 리포트를 셋으로 돌리면 가능하다
function makeReportBoard(id_list, report) {
  let deduplication = new Set(report);
  const reportBoard = new Object();
  for (const id of id_list) {
    reportBoard[id] = [];
  }
  for (const i of deduplication) {
    const [reporter, reported] = i.split(" ");
    reportBoard[reporter].push(reported);
  }
  return reportBoard;
}

function calculateSuspendedUser(id_list, reportBoard, k) {
  let temp = [...Object.values(reportBoard).flat()];
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
