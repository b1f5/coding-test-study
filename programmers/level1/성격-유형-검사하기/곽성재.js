function solution(survey, choices) {
  // prettier-ignore
  // 모든 성격유형을 풀어서 0점으로 초기화
  const scoreBoard = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const ALL_TYPE = "RTCFJMAN";

  // 만약 성격유형의 종류들이 알파벳순이 아니어도 동작하는지 확인
  // const ALL_TYPE = "TRCFMJAN";

  // 여기에 유저의 성격유형을 하나씩 더해줄예정
  let result = "";

  for (let i = 0; i < survey.length; i++) {
    // 유저가 선택한 선택을 미리 선언
    const choice = choices[i];
    // 4 - x, x - 4 보다는 절대값 사용
    const score = Math.abs(choice - 4);
    if (choice < 4) {
      const type = survey[i][0];
      scoreBoard[type] += score;
    } else if (choice > 4) {
      const type = survey[i][1];
      scoreBoard[type] += score;
    }
  }

  // 하나씩 건너 뛰어가며 순회하기 위해 i += 2
  for (let i = 0; i < ALL_TYPE.length; i += 2) {
    const typePrev = ALL_TYPE[i];
    const typeNext = ALL_TYPE[i + 1];
    if (scoreBoard[typePrev] > scoreBoard[typeNext]) {
      result += typePrev;
    } else if (scoreBoard[typePrev] < scoreBoard[typeNext]) {
      result += typeNext;
    } else {
      result += typePrev < typeNext ? typePrev : typeNext;
    }
  }
  return result;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
